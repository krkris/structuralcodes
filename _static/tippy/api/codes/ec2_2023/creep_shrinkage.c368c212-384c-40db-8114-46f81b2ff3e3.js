selector_to_html = {"a[href=\"#creep\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Creep<a class=\"headerlink\" href=\"#creep\" title=\"Link to this heading\">\u00b6</a></h2>", "a[href=\"#shrinkage\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Shrinkage<a class=\"headerlink\" href=\"#shrinkage\" title=\"Link to this heading\">\u00b6</a></h2>", "a[href=\"#structuralcodes.codes.ec2_2023.eps_cs_50y\"]": "<dt class=\"sig sig-object py\" id=\"structuralcodes.codes.ec2_2023.eps_cs_50y\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">structuralcodes.codes.ec2_2023.</span></span><span class=\"sig-name descname\"><span class=\"pre\">eps_cs_50y</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">fck_28</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">atm_conditions</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">Literal</span><span class=\"p\"><span class=\"pre\">[</span></span><span class=\"s\"><span class=\"pre\">'dry'</span></span><span class=\"p\"><span class=\"pre\">,</span></span><span class=\"w\"> </span><span class=\"s\"><span class=\"pre\">'humid'</span></span><span class=\"p\"><span class=\"pre\">]</span></span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">hn</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">strength_dev_class</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">Literal</span><span class=\"p\"><span class=\"pre\">[</span></span><span class=\"s\"><span class=\"pre\">'CS'</span></span><span class=\"p\"><span class=\"pre\">,</span></span><span class=\"w\"> </span><span class=\"s\"><span class=\"pre\">'CN'</span></span><span class=\"p\"><span class=\"pre\">,</span></span><span class=\"w\"> </span><span class=\"s\"><span class=\"pre\">'CR'</span></span><span class=\"p\"><span class=\"pre\">,</span></span><span class=\"w\"> </span><span class=\"s\"><span class=\"pre\">'slow'</span></span><span class=\"p\"><span class=\"pre\">,</span></span><span class=\"w\"> </span><span class=\"s\"><span class=\"pre\">'normal'</span></span><span class=\"p\"><span class=\"pre\">,</span></span><span class=\"w\"> </span><span class=\"s\"><span class=\"pre\">'rapid'</span></span><span class=\"p\"><span class=\"pre\">]</span></span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">float</span></span></span><a class=\"reference external\" href=\"https://github.com/fib-international/structuralcodes/tree/main/structuralcodes\\codes\\ec2_2023\\_section5_materials.py#L331-L507\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Computes the nominal total shrinkage in \u2030 for concrete after a duration\nof drying of 50 years.</p><p>EN 1992-1-1:2023, Table 5.3.</p></dd>", "a[href=\"#structuralcodes.codes.ec2_2023.A_phi_correction_exp\"]": "<dt class=\"sig sig-object py\" id=\"structuralcodes.codes.ec2_2023.A_phi_correction_exp\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">structuralcodes.codes.ec2_2023.</span></span><span class=\"sig-name descname\"><span class=\"pre\">A_phi_correction_exp</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">hn</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">atm_conditions</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">Literal</span><span class=\"p\"><span class=\"pre\">[</span></span><span class=\"s\"><span class=\"pre\">'dry'</span></span><span class=\"p\"><span class=\"pre\">,</span></span><span class=\"w\"> </span><span class=\"s\"><span class=\"pre\">'humid'</span></span><span class=\"p\"><span class=\"pre\">]</span></span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">float</span></span></span><a class=\"reference external\" href=\"https://github.com/fib-international/structuralcodes/tree/main/structuralcodes\\codes\\ec2_2023\\_section5_materials.py#L145-L182\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Computes the correction exponent for the modification for the phi_50y_t0\nwith respect the fck value.</p><p>EN 1992-1-1:2023, Table 5.2.</p></dd>", "a[href=\"#structuralcodes.codes.ec2_2023.phi_correction_factor\"]": "<dt class=\"sig sig-object py\" id=\"structuralcodes.codes.ec2_2023.phi_correction_factor\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">structuralcodes.codes.ec2_2023.</span></span><span class=\"sig-name descname\"><span class=\"pre\">phi_correction_factor</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">fck</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">A_exponent</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">float</span></span></span><a class=\"reference external\" href=\"https://github.com/fib-international/structuralcodes/tree/main/structuralcodes\\codes\\ec2_2023\\_section5_materials.py#L185-L210\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Computes the correction factor for the computation of the phi_50y_t0.</p><p>EN 1992-1-1:2023, Table 5.2.</p></dd>", "a[href=\"#structuralcodes.codes.ec2_2023.phi_50y_t0\"]": "<dt class=\"sig sig-object py\" id=\"structuralcodes.codes.ec2_2023.phi_50y_t0\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">structuralcodes.codes.ec2_2023.</span></span><span class=\"sig-name descname\"><span class=\"pre\">phi_50y_t0</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">t0</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">atm_conditions</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">Literal</span><span class=\"p\"><span class=\"pre\">[</span></span><span class=\"s\"><span class=\"pre\">'dry'</span></span><span class=\"p\"><span class=\"pre\">,</span></span><span class=\"w\"> </span><span class=\"s\"><span class=\"pre\">'humid'</span></span><span class=\"p\"><span class=\"pre\">]</span></span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">hn</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">strength_dev_class</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">Literal</span><span class=\"p\"><span class=\"pre\">[</span></span><span class=\"s\"><span class=\"pre\">'CS'</span></span><span class=\"p\"><span class=\"pre\">,</span></span><span class=\"w\"> </span><span class=\"s\"><span class=\"pre\">'CN'</span></span><span class=\"p\"><span class=\"pre\">,</span></span><span class=\"w\"> </span><span class=\"s\"><span class=\"pre\">'CR'</span></span><span class=\"p\"><span class=\"pre\">,</span></span><span class=\"w\"> </span><span class=\"s\"><span class=\"pre\">'slow'</span></span><span class=\"p\"><span class=\"pre\">,</span></span><span class=\"w\"> </span><span class=\"s\"><span class=\"pre\">'normal'</span></span><span class=\"p\"><span class=\"pre\">,</span></span><span class=\"w\"> </span><span class=\"s\"><span class=\"pre\">'rapid'</span></span><span class=\"p\"><span class=\"pre\">]</span></span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">float</span></span></span><a class=\"reference external\" href=\"https://github.com/fib-international/structuralcodes/tree/main/structuralcodes\\codes\\ec2_2023\\_section5_materials.py#L213-L328\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Computes the creep coefficient of plain concrete at 50 years of loading.\nInterpolation is linear between values.</p><p>EN 1992-1-1:2023, Table 5.2.</p></dd>", "a[href=\"#structuralcodes.codes.ec2_2023.hn\"]": "<dt class=\"sig sig-object py\" id=\"structuralcodes.codes.ec2_2023.hn\">\n<span class=\"sig-prename descclassname\"><span class=\"pre\">structuralcodes.codes.ec2_2023.</span></span><span class=\"sig-name descname\"><span class=\"pre\">hn</span></span><span class=\"sig-paren\">(</span><em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">Ac</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em>, <em class=\"sig-param\"><span class=\"n\"><span class=\"pre\">u</span></span><span class=\"p\"><span class=\"pre\">:</span></span><span class=\"w\"> </span><span class=\"n\"><span class=\"pre\">float</span></span></em><span class=\"sig-paren\">)</span> <span class=\"sig-return\"><span class=\"sig-return-icon\">\u2192</span> <span class=\"sig-return-typehint\"><span class=\"pre\">float</span></span></span><a class=\"reference external\" href=\"https://github.com/fib-international/structuralcodes/tree/main/structuralcodes\\codes\\ec2_2023\\_section5_materials.py#L121-L142\"><span class=\"viewcode-link\"><span class=\"pre\">[source]</span></span></a></dt><dd><p>Computes the notional size of a given concrete cross-section.</p><p>EN 1992-1-1:2023, Table 5.2.</p></dd>", "a[href=\"#creep-and-shrinkage\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Creep and shrinkage<a class=\"headerlink\" href=\"#creep-and-shrinkage\" title=\"Link to this heading\">\u00b6</a></h1><p>The following functions are related to calculation of creep and shrinkage.</p>"}
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
