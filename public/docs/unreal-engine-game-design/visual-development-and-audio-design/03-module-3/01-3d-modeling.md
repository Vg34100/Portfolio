# Intro to 3D Models & Structure

* 3D Models Overview
 * Created in various programs
   - Blender, Maya, 3D Max, ZBrush
   - Even Unreal Engine has modeling tools

* Triangle Structure
 * "Triangle is always deterministic and results in flat surface/face"
 * Components:
   - 3 vertices (locations in world)
   - 3 edges (straight lines connecting vertices)
   - Face forms when edges connect
 * Quads (4-sided shapes)
   - Used during construction
   - GPU breaks into 2 triangles (trice)

* Texture & UV Mapping
 * 3D models get appearance from texture files
 * UV mapping process:
   - Triangles laid flat in 2D
   - Maps specific sections to texture image
   - U = horizontal texture coordinate
   - V = vertical texture coordinate
   - "Uses U,V since X,Y,Z used for world space"

A 3D model is fundamentally built from triangles that form faces, with textures mapped via UV coordinates giving it appearance. This structure allows GPUs to efficiently render complex models by processing simple geometric shapes.
