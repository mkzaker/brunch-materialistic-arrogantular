exports.config = {
    npm: {
        enabled: false
    },
    modules: {
        definition: false,
        wrapper: false
    },
    plugins: {
        jshint: {
            pattern: /^app\/.*\.js$/
        },
        ng_annotate: {
            pattern: /^app\/.*\.js$/
        },
        JSCS: {
            files: /^app/,
            config: {
                excludeFiles: ['node_modules/**', 'bower_components/**', 'app/assets/**', 'public/**'],
                requireCurlyBraces: [
                    "if",
                    "else",
                    "for",
                    "while",
                    "do",
                    "try",
                    "catch"
                ],
                requireOperatorBeforeLineBreak: true,
                requireCamelCaseOrUpperCaseIdentifiers: true,
                maximumLineLength: {
                    value: 120,
                    allowComments: true,
                    allowRegex: true
                },
                validateIndentation: 4,
                validateQuoteMarks: "'",
                disallowMultipleLineStrings: true,
                disallowMixedSpacesAndTabs: true,
                disallowTrailingWhitespace: true,
                disallowSpaceAfterPrefixUnaryOperators: true,
                disallowMultipleVarDecl: null,
                requireSpaceAfterKeywords: [
                    "if",
                    "else",
                    "for",
                    "while",
                    "do",
                    "switch",
                    "return",
                    "try",
                    "catch"
                ],
                requireSpaceBeforeBinaryOperators: [
                    "=", "+=", "-=", "*=", "/=", "%=", "<<=", ">>=", ">>>=",
                    "&=", "|=", "^=", "+=",
                    "+", "-", "*", "/", "%", "<<", ">>", ">>>", "&",
                    "|", "^", "&&", "||", "===", "==", ">=",
                    "<=", "<", ">", "!=", "!=="
                ],
                requireSpaceAfterBinaryOperators: true,
                requireSpacesInConditionalExpression: true,
                requireSpaceBeforeBlockStatements: true,
                requireLineFeedAtFileEnd: true,
                disallowSpacesInsideObjectBrackets: "all",
                disallowSpacesInsideArrayBrackets: "all",
                disallowSpacesInsideParentheses: true,
                jsDoc: {
                    checkAnnotations: true,
                    checkParamNames: true,
                    requireParamTypes: true,
                    checkReturnTypes: true,
                    checkTypes: true
                },
                disallowMultipleLineBreaks: true,
                disallowCommaBeforeLineBreak: null,
                disallowDanglingUnderscores: null,
                disallowEmptyBlocks: null,
                disallowTrailingComma: null,
                requireCommaBeforeLineBreak: null,
                requireDotNotation: null,
                requireMultipleVarDecl: null,
                requireParenthesesAroundIIFE: true
            }
        }
    },
    files: {
        javascripts: {
            joinTo: {
                'javascript/app.js': /^app/,
                'javascript/vendor.js': /^bower_components/
            },
            order: {
                before: ['app/**/*.module.js']
            }
        },
        stylesheets: {
            joinTo: {
                'stylesheets/app.css': /^app/,
                'stylesheets/vendor.css': /^bower_components|vendor/
            },
            order: {
                before: ['font-awesome.css']
            }
        },
        templates: {
            joinTo: 'javascript/templates.js'
        }
    }
};