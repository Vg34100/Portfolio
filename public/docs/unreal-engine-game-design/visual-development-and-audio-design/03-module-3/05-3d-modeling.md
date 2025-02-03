# 3D Modeling Workflow in Unreal

* Pre-Production Design Process:
 * Starts with 2D sketch (using Procreate or similar)
   * Important to try multiple iterations/shapes (20-50 sketches)
   * Focus on silhouette and basic forms first
 * Design Refinement:
   * Experiment with features (noses, smiles, eyes)
   * Add character elements (tools, expressions)
   * Consider proportions (big hat/small body vs opposite)
 * Color and Lighting:
   * Establish base colors and values
   * Add backlighting for emotion/character
   * Create fantasy textures with "loose, swooshing motions"

* Unreal Engine Setup:
 * Create new basic level in 3D modeling folder
 * Import 2D sketch:
   - Use "Apply paper 2D texture settings" for transparency
   - Add plane at origin (0,0,0)
   - Rotate plane to face positive X direction
 * Modeling Mode Tools:
   - Access via dropdown by Selection mode
   - Can insert edge loops and extrude selections
   - Convert between dynamic/static mesh as needed

* 3D Modeling Process:
 * Start with basic box as dynamic mesh
 * Work larger scale for easier selection
 * Create silhouette:
   - Insert edge loops
   - Extrude for L-shapes
   - Adjust vertices for desired form
 * Refinements:
   - Use bevel tool (value of 2) for edges
   - Fix UVs using box projection
   - Can thin out by moving vertices

* Final Steps:
 * Texturing options:
   - Import to 3D painting programs
   - Use base textures/materials
   - Apply decals for surface details
 * Save as static mesh (sm_sign_001)

The workflow moves from 2D concept to 3D model through careful planning and iteration. Process emphasizes starting simple and building complexity through tools like edge loops, extrusions, and proper UV setup.