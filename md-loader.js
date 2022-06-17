const hljs = require("highlight.js");
const md = require("markdown-it")({
	highlight: function(str, lang) {
		if (lang && hljs.getLanguage(lang)) {
			try {
				return hljs.highlight(lang, str).value;
			} catch (__) {}
		}

		return ""; // 使用额外的默认转义
	}
});

module.exports = function(source) {
	console.log("source: ", source);
	const result = md.render(source);
	let code = `module.exports = ${JSON.stringify(result)}`;
	code = code.replace(/<table>/g, "<table border='1' cellspacing='0'>"); // 调整表格样式
	console.log("code: ", code);
	return code;
};