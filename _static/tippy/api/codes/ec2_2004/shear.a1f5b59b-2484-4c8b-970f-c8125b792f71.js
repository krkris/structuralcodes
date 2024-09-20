selector_to_html = {"a[href=\"#structuralcodes.codes.ec2_2004.VRds\"]": "<dt class=\"sig sig-object py\" id=\"structuralcodes.codes.ec2_2004.VRds\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">structuralcodes.codes.ec2_2004.</span></span><span class=\"sig-name descname\"><span class=\"pre\">VRds</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">Asw</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">s</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">z</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">theta</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">fyk</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">alpha</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">90.0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">gamma_s</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">1.15</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">float</span></span></span><a class=\"reference external\" href=\"https://github.com/fib-international/structuralcodes/tree/main/structuralcodes\\codes\\ec2_2004\\shear.py#L350-L396\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Calculate the shear resistance of vertical shear reinforcement.</p><p>EN 1992-1-1 (2005). Eq. (6.8)</p></dd>", "a[href=\"#structuralcodes.codes.ec2_2004.VRdmax\"]": "<dt class=\"sig sig-object py\" id=\"structuralcodes.codes.ec2_2004.VRdmax\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">structuralcodes.codes.ec2_2004.</span></span><span class=\"sig-name descname\"><span class=\"pre\">VRdmax</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">bw</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">z</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">fck</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">theta</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">NEd</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">Ac</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">fcd</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">alpha</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">90.0</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">limit_fyd</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">bool</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">False</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">float</span></span></span><a class=\"reference external\" href=\"https://github.com/fib-international/structuralcodes/tree/main/structuralcodes\\codes\\ec2_2004\\shear.py#L401-L453\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Calculate the maximum shear strength of the compression strut.</p><p>EN 1992-1-1 (2005). Eq. (6.9)</p></dd>", "a[href=\"#structuralcodes.codes.ec2_2004.VRdc\"]": "<dt class=\"sig sig-object py\" id=\"structuralcodes.codes.ec2_2004.VRdc\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">structuralcodes.codes.ec2_2004.</span></span><span class=\"sig-name descname\"><span class=\"pre\">VRdc</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">fck</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">d</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">Asl</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">bw</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">NEd</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">Ac</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">fcd</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">k1</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">0.15</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">gamma_c</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">1.5</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">float</span></span></span><a class=\"reference external\" href=\"https://github.com/fib-international/structuralcodes/tree/main/structuralcodes\\codes\\ec2_2004\\shear.py#L164-L210\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Compute the design strength of the shear resistance.</p><p>EN 1992-1-1 (2005), Eq. (6.2)</p></dd>", "a[href=\"#structuralcodes.codes.ec2_2004.VRdc_prin_stress\"]": "<dt class=\"sig sig-object py\" id=\"structuralcodes.codes.ec2_2004.VRdc_prin_stress\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">structuralcodes.codes.ec2_2004.</span></span><span class=\"sig-name descname\"><span class=\"pre\">VRdc_prin_stress</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">Iy</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">bw</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">S</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">fctd</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">NEd</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">Ac</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">L_x</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">None</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">L_pt2</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">None</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">float</span></span></span><a class=\"reference external\" href=\"https://github.com/fib-international/structuralcodes/tree/main/structuralcodes\\codes\\ec2_2004\\shear.py#L230-L282\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Calculate the shear resistance in uncracked, prestressed elements\nwithout shear reinforcement, value is determined via Mohr\u2019s circle.</p><p>The maximal value of the principle tensile stress does no necessarily lay\nat the centre of gravity. If this is the ase the minimum value of the shear\nresistance and corresponding stress needs to be found at the relevant\nlocation.</p><p>EN 1992-1-1 (2005), Eq. (6.4).</p></dd>", "a[href=\"#shear-capacity\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Shear capacity<a class=\"headerlink\" href=\"#shear-capacity\" title=\"Link to this heading\">\u00b6</a></h1><p>The following functions are related to calculation of shear capacity with and without shear reinforcement.</p>", "a[href=\"#structuralcodes.codes.ec2_2004.VEdmax_unreinf\"]": "<dt class=\"sig sig-object py\" id=\"structuralcodes.codes.ec2_2004.VEdmax_unreinf\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">structuralcodes.codes.ec2_2004.</span></span><span class=\"sig-name descname\"><span class=\"pre\">VEdmax_unreinf</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">bw</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">d</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">fck</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">fcd</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">float</span></span></span><a class=\"reference external\" href=\"https://github.com/fib-international/structuralcodes/tree/main/structuralcodes\\codes\\ec2_2004\\shear.py#L286-L308\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Calculate the maximum allowable shear force for cross-sections without\nshear reinforcement.</p><p>En 1992-1-1 (2005), Eq. (6.5).</p></dd>", "a[href=\"#without-shear-reinforcement\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Without shear reinforcement<a class=\"headerlink\" href=\"#without-shear-reinforcement\" title=\"Link to this heading\">\u00b6</a></h2>", "a[href=\"#structuralcodes.codes.ec2_2004.Asw_max\"]": "<dt class=\"sig sig-object py\" id=\"structuralcodes.codes.ec2_2004.Asw_max\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">structuralcodes.codes.ec2_2004.</span></span><span class=\"sig-name descname\"><span class=\"pre\">Asw_max</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">fcd</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">fck</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">bw</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">s</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">fywd</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">NEd</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">Ac</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">alpha</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span><span class=\"w\"> </span><span class=\"o\"><span class=\"pre\">=</span></span><span class=\"w\"> </span><span class=\"default_value\"><span class=\"pre\">90.0</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">float</span></span></span><a class=\"reference external\" href=\"https://github.com/fib-international/structuralcodes/tree/main/structuralcodes\\codes\\ec2_2004\\shear.py#L458-L506\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Calculate the maximum cross-sectional area of the shear reinforcement,\nbased on the assumption 1/tan(theta) == 1.</p><p>EN 1992-1-1 (2005). Eq. (6.13)</p></dd>", "a[href=\"#with-shear-reinforcement\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">With shear reinforcement<a class=\"headerlink\" href=\"#with-shear-reinforcement\" title=\"Link to this heading\">\u00b6</a></h2>"}
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
