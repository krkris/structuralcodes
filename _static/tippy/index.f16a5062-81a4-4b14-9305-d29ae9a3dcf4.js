selector_to_html = {"a[href=\"theory/index.html#theory-ref\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Theory reference<a class=\"headerlink\" href=\"#theory-reference\" title=\"Link to this heading\">\u00b6</a></h1><p>We are working on a description of the theoretical basis for the implementations in the library. Check back regularly for updates.</p>", "a[href=\"installation/index.html#installation\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Installation<a class=\"headerlink\" href=\"#installation\" title=\"Link to this heading\">\u00b6</a></h1><p><code class=\"docutils literal notranslate\"><span class=\"pre\">structuralcodes</span></code> is compatible with Python 3.8, 3.9, 3.10, 3.11 and 3.12, and is installed by typing:</p>", "a[href=\"api/library_structure.html#api-structure\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Library structure<a class=\"headerlink\" href=\"#library-structure\" title=\"Link to this heading\">\u00b6</a></h1><p>The content of StructuralCodes is organized in a hierarchy:</p>", "a[href=\"contributing/index.html#contributing\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Contributing<a class=\"headerlink\" href=\"#contributing\" title=\"Link to this heading\">\u00b6</a></h1><p><a class=\"reference external\" href=\"https://github.com/charliermarsh/ruff\"><img alt=\"Code style: Ruff\" src=\"https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/charliermarsh/ruff/main/assets/badge/format.json\"/></a>\n<a class=\"reference external\" href=\"https://github.com/charliermarsh/ruff\"><img alt=\"Ruff\" src=\"https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/charliermarsh/ruff/main/assets/badge/v2.json\"/></a></p><p><a class=\"reference external\" href=\"https://github.com/fib-international/structuralcodes/actions/workflows/build.yaml\"><img alt=\"Tests\" src=\"https://github.com/fib-international/structuralcodes/actions/workflows/build.yaml/badge.svg\"/></a>\n<a class=\"reference external\" href=\"https://github.com/fib-international/structuralcodes/actions/workflows/create-release.yml\"><img alt=\"Publish\" src=\"https://github.com/fib-international/structuralcodes/actions/workflows/create-release.yml/badge.svg\"/></a>\n<a class=\"reference external\" href=\"https://github.com/fib-international/structuralcodes/actions/workflows/sphinx.yml\"><img alt=\"Docs\" src=\"https://github.com/fib-international/structuralcodes/actions/workflows/sphinx.yml/badge.svg\"/></a></p>", "a[href=\"examples/index.html#examples\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Examples<a class=\"headerlink\" href=\"#examples\" title=\"Link to this heading\">\u00b6</a></h1><p>We are working on a set of examples that demonstrate the use of the library. For now, have a look at the <a class=\"reference internal\" href=\"quickstart/index.html#quickstart\"><span class=\"std std-ref\">quickstart</span></a>.</p>", "a[href=\"api/index.html#api-ref\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">API reference<a class=\"headerlink\" href=\"#api-reference\" title=\"Link to this heading\">\u00b6</a></h1><p>This section contains descriptions of all modules, functions, classes and methods, as well as the structure of the library.</p>", "a[href=\"quickstart/index.html#quickstart\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Quickstart<a class=\"headerlink\" href=\"#quickstart\" title=\"Link to this heading\">\u00b6</a></h1><p>This example shows how to use <code class=\"docutils literal notranslate\"><span class=\"pre\">structuralcodes</span></code> to calculate the response of a rectangular reinforced concrete section. Follow the example step-by-step, or <a class=\"reference internal\" href=\"#quickstart-full-example\"><span class=\"std std-ref\">skip to the end</span></a> if you are in a hurry.</p><p>Import relevant functions and classes:</p>", "a[href=\"#welcome-to-structuralcodes-documentation\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Welcome to StructuralCodes documentation!<a class=\"headerlink\" href=\"#welcome-to-structuralcodes-documentation\" title=\"Link to this heading\">\u00b6</a></h1><p><a class=\"reference external\" href=\"https://badge.fury.io/py/structuralcodes\"><img alt=\"PyPI version\" src=\"https://badge.fury.io/py/structuralcodes.svg\"/></a></p>"}
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
