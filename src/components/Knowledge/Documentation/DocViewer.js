// File: src/components/Knowledge/Documentation/DocViewer.js
import React, { useState, useEffect } from "react";
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
      .replace(/^\d+[-_]/, '') // Remove leading numbers
      .replace(/.md$/, '') // Remove .md extension
      .replace(/-/g, ' ') // Replace hyphens with spaces
      .split(' ') // Split into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(' '); // Join back together
  };

  useEffect(() => {
    fetchStructure();
  }, [folderName]);

  useEffect(() => {
    if (currentPage) {
      fetchContent(currentPage);
    }
  }, [currentPage, folderName]);

  const fetchStructure = async () => {
    try {
      const response = await fetch(`${process.env.PUBLIC_URL}/docs/${folderName}/structure.json`);
      const data = await response.json();
      
      // Automatically expand all directory sections at start
      const allPaths = getAllDirectoryPaths(data);
      setExpandedSections(allPaths);
      
      setStructure(data);
      
      // Find and set first markdown file
      const firstFile = findFirstMarkdownFile(data);
      if (firstFile) {
        setCurrentPage(firstFile.path);
      }
    } catch (error) {
      console.error('Error loading structure:', error);
    }
  };

  // Helper function to get all directory paths
  const getAllDirectoryPaths = (node) => {
    let paths = [];
    if (node.type === 'directory') {
      paths.push(node.path);
      if (node.children) {
        node.children.forEach(child => {
          paths = paths.concat(getAllDirectoryPaths(child));
        });
      }
    }
    return paths;
  };

  const findFirstMarkdownFile = (node) => {
    if (node.type === 'file') return node;
    if (node.children) {
      for (const child of node.children) {
        const result = findFirstMarkdownFile(child);
        if (result) return result;
      }
    }
    return null;
  };

  const fetchContent = async (pagePath) => {
    try {
      const response = await fetch(`${process.env.PUBLIC_URL}/docs/${folderName}/${pagePath}`);
      const text = await response.text();
      setCurrentContent(formatMarkdown(text));
    } catch (error) {
      console.error('Error loading content:', error);
    }
  };

  const formatMarkdown = (text) => {
    const formatted = text.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="purple mb-4">{line.slice(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="purple mb-3">{line.slice(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="purple mb-2">{line.slice(4)}</h3>;
      }
      if (line.startsWith('- ') || line.startsWith('* ')) {
        return <li key={index} className="mb-2">{line.slice(2)}</li>;
      }
      if (line.startsWith('> ')) {
        return <blockquote key={index} className="border-start border-info ps-3 mb-2">{line.slice(2)}</blockquote>;
      }
      return line ? <p key={index} className="mb-2">{line}</p> : <br key={index} />;
    });

    return <div className="markdown-content">{formatted}</div>;
  };

  const toggleSection = (path) => {
    setExpandedSections(prev => 
      prev.includes(path)
        ? prev.filter(p => p !== path)
        : [...prev, path]
    );
  };

  const renderNavigation = (node, level = 0) => {
    if (!node) return null;
  
    // Skip the root level node's display
    if (level === 0) {
      return node.children?.map(child => renderNavigation(child, 1));
    }
  
    if (node.type === 'file') {
      return (
        <div
          key={node.path}
          className={`sidebar-link ${currentPage === node.path ? 'active' : ''}`}
          onClick={() => setCurrentPage(node.path)}
          style={{ 
            cursor: 'pointer',
            paddingLeft: `${(level + 1) * 20}px` // Increase indent for files
          }}
        >
          {formatDisplayName(node.name)}
        </div>
      );
    }
  
    return (
      <div key={node.path}>
        <div
          className="d-flex align-items-center cursor-pointer text-white section-header"
          onClick={() => toggleSection(node.path)}
          style={{ 
            cursor: 'pointer',
            paddingLeft: `${level * 20}px`, // Base indent for folders
            padding: '8px 12px',
          }}
        >
          {expandedSections.includes(node.path) ? 
            <BsChevronDown className="me-2" /> : 
            <BsChevronRight className="me-2" />
          }
          <h6 className="mb-0">
            {formatDisplayName(node.name)}
          </h6>
        </div>
        
        {expandedSections.includes(node.path) && node.children && (
          <div className="section-content">
            {node.children.map(child => renderNavigation(child, level + 1))}
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
            <span className="text-white">Unreal Engine </span>
            <strong className="purple">Fundamentals</strong>
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
                <Card.Body className="text-white">
                  {currentContent}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </DropIn>
      </Container>
    </Container>
  );
}

export default DocViewer;