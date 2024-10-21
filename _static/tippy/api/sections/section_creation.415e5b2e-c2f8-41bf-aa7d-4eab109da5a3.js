selector_to_html = {"a[href=\"../geometry/geometry_creation.html#structuralcodes.geometry.CompoundGeometry\"]": "<dt class=\"sig sig-object py\" id=\"structuralcodes.geometry.CompoundGeometry\">\n<em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-prename descclassname\"><span class=\"pre\">structuralcodes.geometry.</span></span><span class=\"sig-name descname\"><span class=\"pre\">CompoundGeometry</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">geometries</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">List</span><span class=\"p\"><span class=\"pre\">[</span></span><a class=\"reference internal\" href=\"#structuralcodes.geometry.Geometry\" title=\"structuralcodes.geometry._geometry.Geometry\"><span class=\"pre\">Geometry</span></a><span class=\"p\"><span class=\"pre\">]</span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">|</span></span><span class=\"w\"> </span><a class=\"reference external\" href=\"https://shapely.readthedocs.io/en/stable/reference/shapely.MultiPolygon.html#shapely.MultiPolygon\" title=\"(in Shapely)\"><span class=\"pre\">MultiPolygon</span></a></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">materials</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">List</span><span class=\"p\"><span class=\"pre\">[</span></span><a class=\"reference internal\" href=\"../materials/base_materials.html#structuralcodes.core.base.Material\" title=\"structuralcodes.core.base.Material\"><span class=\"pre\">Material</span></a><span class=\"p\"><span class=\"pre\">]</span></span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">|</span></span><span class=\"w\"> </span><a class=\"reference internal\" href=\"../materials/base_materials.html#structuralcodes.core.base.Material\" title=\"structuralcodes.core.base.Material\"><span class=\"pre\">Material</span></a><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">|</span></span><span class=\"w\"> </span><span class=\"pre\">None</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">None</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference external\" href=\"https://github.com/fib-international/structuralcodes/tree/main/structuralcodes\\geometry\\_geometry.py#L687-L889\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Class for a compound geometry.</p><p>It is basicaly a set of geometries, each one with its own materials and\nproperties.</p></dd>", "a[href=\"#section-creation\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Section creation<a class=\"headerlink\" href=\"#section-creation\" title=\"Link to this heading\">\u00b6</a></h1><h2>The generic section<a class=\"headerlink\" href=\"#the-generic-section\" title=\"Link to this heading\">\u00b6</a></h2>", "a[href=\"#the-generic-section\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">The generic section<a class=\"headerlink\" href=\"#the-generic-section\" title=\"Link to this heading\">\u00b6</a></h2>", "a[href=\"#structuralcodes.sections.GenericSection.gross_properties\"]": "<dt class=\"sig sig-object py\" id=\"structuralcodes.sections.GenericSection.gross_properties\">\n<em class=\"property\"><span class=\"pre\">property</span><span class=\"w\"> </span></em><span class=\"sig-name descname\"><span class=\"pre\">gross_properties</span></span><em class=\"property\"><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><a class=\"reference internal\" href=\"section_calculator.html#structuralcodes.core._section_results.GrossProperties\" title=\"structuralcodes.core._section_results.GrossProperties\"><span class=\"pre\">GrossProperties</span></a></em></dt><dd><p>Return the gross properties of the section.</p></dd>", "a[href=\"#structuralcodes.sections.GenericSection.section_calculator\"]": "<dt class=\"sig sig-object py\" id=\"structuralcodes.sections.GenericSection.section_calculator\">\n<span class=\"sig-name descname\"><span class=\"pre\">section_calculator</span></span></dt><dd><p>The object responsible\nfor performing different calculations on the section (e.g. bending\nstrength, moment curvature, etc.).</p></dd>", "a[href=\"#structuralcodes.sections.GenericSection.__init__\"]": "<dt class=\"sig sig-object py\" id=\"structuralcodes.sections.GenericSection.__init__\">\n<span class=\"sig-name descname\"><span class=\"pre\">__init__</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">geometry</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><a class=\"reference internal\" href=\"../geometry/geometry_creation.html#structuralcodes.geometry.SurfaceGeometry\" title=\"structuralcodes.geometry._geometry.SurfaceGeometry\"><span class=\"pre\">SurfaceGeometry</span></a><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">|</span></span><span class=\"w\"> </span><a class=\"reference internal\" href=\"../geometry/geometry_creation.html#structuralcodes.geometry.CompoundGeometry\" title=\"structuralcodes.geometry._geometry.CompoundGeometry\"><span class=\"pre\">CompoundGeometry</span></a></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">name</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">str</span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">|</span></span><span class=\"w\"> </span><span class=\"pre\">None</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">None</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">integrator</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">Literal</span><span class=\"p\"><span class=\"pre\">[</span></span><span class=\"s\"><span class=\"pre\">'marin'</span></span><span class=\"p\"><span class=\"pre\">,</span></span><span class=\"w\"> </span><span class=\"s\"><span class=\"pre\">'fiber'</span></span><span class=\"p\"><span class=\"pre\">]</span></span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">'marin'</span></span></em>, <em class=\"sig-param\"><span class=\"o\"><span class=\"pre\">**</span></span><span class=\"n\"><span class=\"pre\">kwargs</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">None</span></span></span><a class=\"reference external\" href=\"https://github.com/fib-international/structuralcodes/tree/main/structuralcodes\\sections\\_generic.py#L44-L82\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Initialize a GenericSection.</p></dd>", "a[href=\"#structuralcodes.sections.GenericSection.name\"]": "<dt class=\"sig sig-object py\" id=\"structuralcodes.sections.GenericSection.name\">\n<span class=\"sig-name descname\"><span class=\"pre\">name</span></span></dt><dd><p>The name of the section.</p></dd>", "a[href=\"#structuralcodes.sections.GenericSection.geometry\"]": "<dt class=\"sig sig-object py\" id=\"structuralcodes.sections.GenericSection.geometry\">\n<span class=\"sig-name descname\"><span class=\"pre\">geometry</span></span></dt><dd><p>The geometry of\nthe section.</p></dd>", "a[href=\"section_calculator.html#structuralcodes.sections.GenericSectionCalculator\"]": "<dt class=\"sig sig-object py\" id=\"structuralcodes.sections.GenericSectionCalculator\">\n<em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-prename descclassname\"><span class=\"pre\">structuralcodes.sections.</span></span><span class=\"sig-name descname\"><span class=\"pre\">GenericSectionCalculator</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">sec</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><a class=\"reference internal\" href=\"section_creation.html#structuralcodes.sections.GenericSection\" title=\"structuralcodes.sections._generic.GenericSection\"><span class=\"pre\">GenericSection</span></a></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">integrator</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">Literal</span><span class=\"p\"><span class=\"pre\">[</span></span><span class=\"s\"><span class=\"pre\">'marin'</span></span><span class=\"p\"><span class=\"pre\">,</span></span><span class=\"w\"> </span><span class=\"s\"><span class=\"pre\">'fiber'</span></span><span class=\"p\"><span class=\"pre\">]</span></span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">'marin'</span></span></em>, <em class=\"sig-param\"><span class=\"o\"><span class=\"pre\">**</span></span><span class=\"n\"><span class=\"pre\">kwargs</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference external\" href=\"https://github.com/fib-international/structuralcodes/tree/main/structuralcodes\\sections\\_generic.py#L94-L1287\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Calculator class implementing analysis algorithms for code checks.</p></dd>", "a[href=\"section_calculator.html#structuralcodes.core._section_results.GrossProperties\"]": "<dt class=\"sig sig-object py\" id=\"structuralcodes.core._section_results.GrossProperties\">\n<em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-prename descclassname\"><span class=\"pre\">structuralcodes.core._section_results.</span></span><span class=\"sig-name descname\"><span class=\"pre\">GrossProperties</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">area</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">area_reinforcement</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">ea</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">mass</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">perimeter</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">sy</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">sz</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">e_sy</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">e_sz</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">cy</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">cz</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">iyy</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">izz</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">iyz</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">iyy_c</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">izz_c</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">iyz_c</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">i11</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">i22</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">theta</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">e_iyy</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">e_izz</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">e_iyz</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">e_iyy_c</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">e_izz_c</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">e_iyz_c</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">e_i11</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">e_i22</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">e_theta</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference external\" href=\"https://github.com/fib-international/structuralcodes/tree/main/structuralcodes\\core\\_section_results.py#L10-L126\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Simple dataclass for storing gross section properties.</p></dd>", "a[href=\"#structuralcodes.sections.GenericSection\"]": "<dt class=\"sig sig-object py\" id=\"structuralcodes.sections.GenericSection\">\n<em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-prename descclassname\"><span class=\"pre\">structuralcodes.sections.</span></span><span class=\"sig-name descname\"><span class=\"pre\">GenericSection</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">geometry</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><a class=\"reference internal\" href=\"../geometry/geometry_creation.html#structuralcodes.geometry.SurfaceGeometry\" title=\"structuralcodes.geometry._geometry.SurfaceGeometry\"><span class=\"pre\">SurfaceGeometry</span></a><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">|</span></span><span class=\"w\"> </span><a class=\"reference internal\" href=\"../geometry/geometry_creation.html#structuralcodes.geometry.CompoundGeometry\" title=\"structuralcodes.geometry._geometry.CompoundGeometry\"><span class=\"pre\">CompoundGeometry</span></a></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">name</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">str</span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">|</span></span><span class=\"w\"> </span><span class=\"pre\">None</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">None</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">integrator</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">Literal</span><span class=\"p\"><span class=\"pre\">[</span></span><span class=\"s\"><span class=\"pre\">'marin'</span></span><span class=\"p\"><span class=\"pre\">,</span></span><span class=\"w\"> </span><span class=\"s\"><span class=\"pre\">'fiber'</span></span><span class=\"p\"><span class=\"pre\">]</span></span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">'marin'</span></span></em>, <em class=\"sig-param\"><span class=\"o\"><span class=\"pre\">**</span></span><span class=\"n\"><span class=\"pre\">kwargs</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference external\" href=\"https://github.com/fib-international/structuralcodes/tree/main/structuralcodes\\sections\\_generic.py#L26-L91\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>This is the implementation of the generic class section.</p><p>The section is a 2D geometry where Y axis is horizontal while Z axis is\nvertical.</p><p>The moments and curvatures around Y and Z axes are assumed positive\naccording to RHR.</p></dd>", "a[href=\"../geometry/geometry_creation.html#structuralcodes.geometry.SurfaceGeometry\"]": "<dt class=\"sig sig-object py\" id=\"structuralcodes.geometry.SurfaceGeometry\">\n<em class=\"property\"><span class=\"pre\">class</span><span class=\"w\"> </span></em><span class=\"sig-prename descclassname\"><span class=\"pre\">structuralcodes.geometry.</span></span><span class=\"sig-name descname\"><span class=\"pre\">SurfaceGeometry</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">poly</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><a class=\"reference external\" href=\"https://shapely.readthedocs.io/en/stable/reference/shapely.Polygon.html#shapely.Polygon\" title=\"(in Shapely)\"><span class=\"pre\">Polygon</span></a></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">material</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><a class=\"reference internal\" href=\"../materials/base_materials.html#structuralcodes.core.base.Material\" title=\"structuralcodes.core.base.Material\"><span class=\"pre\">Material</span></a><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">|</span></span><span class=\"w\"> </span><a class=\"reference internal\" href=\"../materials/base_materials.html#structuralcodes.core.base.ConstitutiveLaw\" title=\"structuralcodes.core.base.ConstitutiveLaw\"><span class=\"pre\">ConstitutiveLaw</span></a></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">density</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span><span class=\"w\"> </span><span class=\"p\"><span class=\"pre\">|</span></span><span class=\"w\"> </span><span class=\"pre\">None</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">None</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">concrete</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">bool</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">False</span></span></em><span class=\"sig-paren\">)</span><a class=\"reference external\" href=\"https://github.com/fib-international/structuralcodes/tree/main/structuralcodes\\geometry\\_geometry.py#L326-L639\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Class for a surface geometry with material.</p><p>Basically it is a wrapper for shapely polygon including the material (and\nother parameters needed). As a shapely polygon it can contain one or more\nholes.</p></dd>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(` ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: true,

            });
        };
    };
    console.log("tippy tips loaded!");
};
