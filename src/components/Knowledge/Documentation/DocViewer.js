// File: src/components/Knowledge/Documentation/DocViewer.js
import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import Particle from "../../Particle";
import DropIn from "../../DropIn";

function DocViewer({ title, folderName }) {
  const [structure, setStructure] = useState(null);
  const [currentContent, setCurrentContent] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const [expandedSections, setExpandedSections] = useState([]);

  // Helper function to format display names
  const formatDisplayName = (name) => {
    return name
      .replace(/^\d+[-_]/, "") // Remove leading numbers
      .replace(/.md$/, "") // Remove .md extension
      .replace(/-/g, " ") // Replace hyphens with spaces
      .split(" ") // Split into words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(" "); // Join back together
  };

  // Helper function to get all directory paths
  const getAllDirectoryPaths = useCallback((node) => {
    let paths = [];
    if (node.type === "directory") {
      paths.push(node.path);
      if (node.children) {
        node.children.forEach((child) => {
          paths = paths.concat(getAllDirectoryPaths(child));
        });
      }
    }
    return paths;
  }, []); // Empty array if no external dependencies

  const findFirstMarkdownFile = useCallback((node) => {
    if (node.type === "file") return node;
    if (node.children) {
      for (const child of node.children) {
        const result = findFirstMarkdownFile(child);
        if (result) return result;
      }
    }
    return null;
  }, []); // Empty array if no external dependencies

  const fetchStructure = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.PUBLIC_URL}/docs/${folderName}/structure.json`,
      );
      const data = await response.json();

      const allPaths = getAllDirectoryPaths(data);
      setExpandedSections(allPaths);

      setStructure(data);

      const firstFile = findFirstMarkdownFile(data);
      if (firstFile) {
        setCurrentPage(firstFile.path);
      }
    } catch (error) {
      console.error("Error loading structure:", error);
    }
  }, [findFirstMarkdownFile, folderName, getAllDirectoryPaths]);

  const fetchContent = useCallback(
    async (pagePath) => {
      try {
        const response = await fetch(
          `${process.env.PUBLIC_URL}/docs/${folderName}/${pagePath}`,
        );
        const text = await response.text();
        setCurrentContent(formatMarkdown(text));
      } catch (error) {
        console.error("Error loading content:", error);
      }
    },
    [folderName],
  );

  useEffect(() => {
    fetchStructure();
  }, [fetchStructure, folderName]);

  useEffect(() => {
    if (currentPage) {
      fetchContent(currentPage);
    }
  }, [currentPage, fetchContent, folderName]);

  const formatMarkdown = (text) => {
    const lines = text.split("\n");

    const formatted = lines.map((line, index) => {
      // First handle headers
      if (line.startsWith("# ")) {
        return (
          <h1 key={index} className="purple mb-4">
            {line.slice(2)}
          </h1>
        );
      }
      if (line.startsWith("## ")) {
        return (
          <h2 key={index} className="purple mb-3">
            {line.slice(3)}
          </h2>
        );
      }
      if (line.startsWith("### ")) {
        return (
          <h3 key={index} className="purple mb-2">
            {line.slice(4)}
          </h3>
        );
      }

      // Count leading spaces to determine indentation level
      const leadingSpaces = line.match(/^\s*/)[0].length;
      const indentLevel = Math.floor(leadingSpaces / 2); // Every 2 spaces = 1 level

      // Check for list items (-, *, •, >)
      const trimmedLine = line.trim();
      if (trimmedLine.match(/^[-*•>]/)) {
        const content = trimmedLine.slice(1).trim(); // Remove the list marker and trim
        return (
          <div
            key={index}
            style={{
              paddingLeft: `${indentLevel * 20}px`,
              marginBottom: "0.5rem",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <span style={{ marginRight: "8px", minWidth: "12px" }}>
              {trimmedLine.startsWith(">") ? "›" : "•"}
            </span>
            <span>{content}</span>
          </div>
        );
      }

      // Regular paragraphs
      return line.trim() ? (
        <p key={index} className="mb-2">
          {line}
        </p>
      ) : (
        <br key={index} />
      );
    });

    return <div className="markdown-content">{formatted}</div>;
  };

  const toggleSection = (path) => {
    setExpandedSections((prev) =>
      prev.includes(path) ? prev.filter((p) => p !== path) : [...prev, path],
    );
  };

  const renderNavigation = (node, level = 0) => {
    if (!node) return null;

    // Skip the root level node's display
    if (level === 0) {
      return node.children?.map((child) => renderNavigation(child, 1));
    }

    if (node.type === "file") {
      return (
        <div
          key={node.path}
          className={`sidebar-link ${currentPage === node.path ? "active" : ""}`}
          onClick={() => setCurrentPage(node.path)}
          style={{
            cursor: "pointer",
            paddingLeft: `${level * 20}px`,
          }}
        >
          {formatDisplayName(node.name)}
        </div>
      );
    }

    // Check if the folder name contains "Module" or "module"
    const isModule = node.name.toLowerCase().includes("module");

    return (
      <div key={node.path}>
        <div
          className={`d-flex align-items-center cursor-pointer text-white ${
            isModule ? "module-header" : "section-header"
          }`}
          onClick={() => toggleSection(node.path)}
          style={{
            cursor: "pointer",
            paddingLeft: `${(level - 1) * 20}px`,
            padding: isModule ? "12px 16px" : "8px 12px",
            background: isModule ? "#1e97ae" : "transparent",
            border: isModule ? "1px solid #24b8d4" : "none",
            borderRadius: isModule ? "8px" : "0",
            margin: isModule ? "8px 0" : "0",
            transition: "all 0.3s ease",
          }}
        >
          {expandedSections.includes(node.path) ? (
            <BsChevronDown className="me-2" />
          ) : (
            <BsChevronRight className="me-2" />
          )}
          <h6
            className="mb-0"
            style={{
              fontWeight: isModule ? "600" : "normal",
              fontSize: isModule ? "1.1rem" : "1rem",
            }}
          >
            {formatDisplayName(node.name)}
          </h6>
        </div>

        {expandedSections.includes(node.path) && node.children && (
          <div className="section-content">
            {node.children.map((child) => renderNavigation(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <Container fluid className="knowledge-section">
      <Particle />
      <Container>
        <DropIn>
          <h1 className="text-center mb-5">
            <strong className="text-white">{title} </strong>
            {/* <span className="text-white">Unreal Engine </span>
            <strong className="purple">Fundamentals</strong> */}
          </h1>

          <Row>
            <Col md={3}>
              <div className="sticky-top" style={{ top: "100px" }}>
                <Card className="knowledge-card">
                  {structure && renderNavigation(structure)}
                </Card>
              </div>
            </Col>

            <Col md={9}>
              <Card className="knowledge-card">
                <Card.Body className="text-white">{currentContent}</Card.Body>
              </Card>
            </Col>
          </Row>
        </DropIn>
      </Container>
    </Container>
  );
}

export default DocViewer;
