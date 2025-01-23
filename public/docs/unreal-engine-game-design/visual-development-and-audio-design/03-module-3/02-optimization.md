# 3D Model Optimization Techniques

* Historical & Current State
 * Games have triangle budget ranges for level traversal
 * Nanite improvements:
   - Can render billions of triangles
   - Limited to high-end PC/latest consoles
   - Not available for phones/tablets/Switch/older PCs

* Level of Detail (LOD) System
 * Adjusts triangle count based on camera distance
   - Less triangles = less CPU/GPU resources
   - Can be created externally or auto-generated
 * Model deforms as triangles reduce
   - "Imperfections less noticeable at distance"
   - Quality increases as camera approaches

* Draw Call Optimization
 * Each material = one draw call
 * Complex materials impact render performance
 * Solutions:
   - Instance static meshes
     > Single draw call for thousands of meshes
     > Can modify location/scale
   - Hierarchical instance static meshes
   - Foliage system uses this feature

* Normal Map Optimization
 * Purpose: Detail preservation with less triangles
   - Example: Fox statue
     > High poly: 1 million triangles
     > Low poly: 1000 triangles
 * Limitations:
   - Time-intensive to create
   - Requires regeneration if model changes
 * "Nanite removes need for LOD and normal maps"
   - Improves artist workflow
   - Enables highly detailed models

Optimization techniques balance visual quality with performance constraints, using methods like LOD and normal maps to maintain detail while reducing resource usage. As technology advances with features like Nanite, these approaches continue to evolve.
