//================================================================= Variable =================================================================//
var dom_proj_title = ".changes-disclaimer .info_title";												// Variables
var dom_proj_description = ".changes-disclaimer .markdown p";										// for
var dom_api_version = ".changes-disclaimer .api-version";											// works
var dom_base_url = ".changes-disclaimer .base-url";													// with

var dom_title = ".heading .operation-title";														// dom
var dom_description = ".action-summary p";															// elements

var dom_param_description = ".small-description .markdown p";										// in

var dom_left_main_title = "#resources_nav .resources";												// swagger-ui
var dom_left_title = "#resources_nav .resources .item";												// templates

var closest = "ul.operations li.operation";															//    /\
var parent = "";																					//   /  \
var path_elem_s = ".heading .path a", path_elem;													//  /_||_\
var method_s = ".heading .http_method a", method;													//    ||
var class_input = "edit_input";																		//    ||
var edit_elem = "";																					//    ||
var id_edit_elem = "";																				// ___||

var class_save = "save_lang";																		// Class for save button
var save_message = "Save changes in lang file";														// Message in save button
var button_save = "<button class='" + class_save + "'>" + save_message + "</button>\n";				// Save button
var class_update = "update_lang";																	// Class for update button
var update_message = "Update";																		// Message in update button
var button_update = "<button onclick='window.location.reload()' class='" + class_update + "'>" +
update_message + "</button>\n";																		// Update button

var key, value, link, numdel, length, timeout, buffer;												// Secondary variables

var path = [], path_buf = [];																		// Arrays for path in jsonAPI

var blob = {};																						// Variable for save file
//=============================================================== End Variable ===============================================================//


//================================================================= Functions =================================================================//
function liveDefaultLang(limit) {																	// Function for calculation time live
	var time = localStorage.time;																	// localStorage

	if (time === null) {																			// If localStorage.time is null
	    return false;																				// Return false
	} else {
		if ((new Date()).getTime() - time < limit) {												// Check overlimit time
		    localStorage.time = (new Date()).getTime();												// Update localStorage.time
			return true;																			// Return true
		} else {
			return false;																			// Return false
		}
	}
}

function addScript(src) {																			// Function for add script
	document.write("<script src='" + src + "'></script>");											// in HTML document
}

function addStyle() {																				// Function for add style in HTML document
	document.write("<style>.langs{position:absolute;font-size:14px;top:30px;right:18px;text-align:right;max-width:65%;z-index:2}.update_lang,.save_lang,.langs__item{z-index:10;margin-right:12px;display:inline;display:inline-block;text-transform:none;border-radius:4px;padding:6px 12px;background-color:#3f5adf;font-weight:bold;color:#fff;-webkit-transition:background-color 0.3s ease;-moz-transition:background-color 0.3s ease;-ms-transition:background-color 0.3s ease;-o-transition:background-color 0.3s ease;transition:background-color 0.3s ease;letter-spacing:1px;cursor:pointer;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:1px solid transparent;box-shadow:none;text-decoration:none;outline:none}.update_lang:hover,.langs__item:hover{background-color:#12235e;box-shadow:none;text-decoration:none}.save_lang,.langs__item-active{background-color:#39aa22}.save_lang:hover,.langs__item-active:hover{background-color:#095508}.error_message{color:#fff;background-color:#bb3322;border-radius:4px;text-align:center;padding:7px 16px;letter-spacing: 1px;font-weight: bold}.error_edit_mode{max-width:440px;position:absolute;top:30px;left:0;right:0;margin-left:auto;margin-right:auto}.edit_input{position:absolute;width:200px;font-size:14px;padding:6px 12px;border-radius:4px;border:1px solid #7ae;z-index:10;bottom:-30px;left:0;display:none}.edit_input:hover{display:block}.edit_small_input{width:80px;margin-left:-30px;top:16px}.edit_textarea{height:auto;min-height:120px;bottom:2px;resize:vertical}.update_lang,.save_lang{display:none;position:fixed;right:18px;top:100px}.update_lang{top:138px;display:block}.edit_large_textarea{resize:none;bottom:-80px;min-height:80px;height:80px;width:470px}.edit_large_input{bottom:-40px;left:-165px;width:400px}.top_input{bottom:auto;top:-26px;left:16px}</style>");
}

function getLangs(config) {
	var arr_langs = [];																				// Var for array langs

	if (config.show_langs !== null) {																// If config.show_langs isn't null
		if (config.show_langs.length !== 0) {														// If config.show_langs isn't empty
			if (Object.prototype.toString.call(config.show_langs) === '[object String]') {			// If config.show_langs is string
				if (config.show_langs === "ALL") {													// If config.show_langs = "ALL"

				} else {
					arr_langs.push(config.show_langs);												// Get lang
				}
			} else {
				if (Object.prototype.toString.call(config.show_langs) === '[object Array]') {		// If config.show_langs is array
					arr_langs = config.show_langs;													// Get langs
				} else {
					arr_langs = null;																// langs is null
				}
			}
		}
	}

	return arr_langs;																				// Return result
}

function key_up (e) {
	key = e.keyCode || e.which;

	if (key == "13") {
		if (timeout) {
			clearTimeout(timeout);
		}

		timeout = setTimeout(function () {
			value = jQuery(buffer).val();

			if (value !== "") {
				path_buf = jQuery(buffer).attr("id").split("-");
				length = path_buf.length;

				if (length !== 1) {
					link = jsonAPI[path_buf[0]];

					if (path_buf[length - 1] == "tags") {
						jQuery.each(link, function (index, cur_path) {
							jQuery.each(cur_path, function (index, cur_method) {
								if (numdel = jQuery.inArray(path_buf[1], cur_method["tags"]) != -1) {
									cur_method["tags"].splice(cur_method["tags"].indexOf(path_buf[1]), 1);
									cur_method["tags"].push(value);
								}
							});
						});
					} else {
						for (var i = 1; i < length - 1; i++) {
							link = link[path_buf[i]];
						}

						link[path_buf[length - 1]] = value;
					}
				} else {
					jsonAPI[path_buf[0]] = value;
				}

				jQuery(buffer).val("");
				jQuery(buffer).attr("placeholder", value);
				jQuery(buffer).css("border-color", "#6d4");

				jQuery("." + class_save).fadeIn();
			}
		}, 1000);
	}
}

function addInputEdit(type_edit_elem, elem) {
	switch (type_edit_elem) {
		case "input":
			edit_elem = "<input type='text' class='edit_input' id='" + id_edit_elem + "' />";
			break;

		case "top-input":
			edit_elem = "<input type='text' class='edit_input top_input' id='" + id_edit_elem + "' />";
			break;

		case "large-input":
			edit_elem = "<input type='text' class='edit_input edit_large_input' id='" + id_edit_elem + "' />";
			break;

		case "small-input":
			edit_elem = "<input type='text' class='edit_input edit_small_input' id='" + id_edit_elem + "' />";
			break;

		case "textarea":
			edit_elem = "<textarea class='edit_input edit_textarea' id='" + id_edit_elem + "'></textarea>";
			break;

		case "large-textarea":
			edit_elem = "<textarea class='edit_input edit_textarea edit_large_textarea' id='" + id_edit_elem + "'></textarea>";
			break;

		default:
			edit_elem = "<input type='text' class='edit_input' id='" + id_edit_elem + "' />\n";
	}

	jQuery(elem).css('position', 'relative');
	jQuery(elem).append(edit_elem);
}

function editMode(default_lang) {
	jQuery("body").prepend(button_save);

	path = Array("info", "title");
	id_edit_elem = (path.length !== 1) ? path.join("-") : path[0];
	addInputEdit("input", dom_proj_title);

	path = Array("info", "description");
	id_edit_elem = (path.length !== 1) ? path.join("-") : path[0];
	addInputEdit("textarea", dom_proj_description);

	path = Array("info", "version");
	id_edit_elem = (path.length !== 1) ? path.join("-") : path[0];
	addInputEdit("small-input", dom_api_version);

	path = Array("basePath");
	id_edit_elem = (path.length !== 1) ? path.join("-") : path[0];
	addInputEdit("small-input", dom_base_url);

	jQuery(dom_title).each(function (index, item_title) {
		parent = jQuery(item_title).closest(closest);
		path_elem = jQuery(parent).find(path_elem_s)[0].textContent;
		method = jQuery(parent).find(method_s)[0].textContent;
		path = Array("paths", path_elem, method, "summary");
		id_edit_elem = path.join("-");
		addInputEdit("input", "#" + jQuery(parent).attr("id") + " " + dom_title);
	});

	jQuery(dom_description).each(function (index, item_desc) {
		parent = jQuery(item_desc).closest(closest);
		path_elem = jQuery(parent).find(path_elem_s)[0].textContent;
		method = jQuery(parent).find(method_s)[0].textContent;
		path = Array("paths", path_elem, method, "description");
		id_edit_elem = path.join("-");
		addInputEdit("large-textarea", "#" + jQuery(parent).attr("id") + " " + dom_description);
	});

	path_elem_s = ".param-property";
	jQuery(dom_param_description).each(function (index, item_param_desc) {
		parent = jQuery(item_param_desc).closest(".parameter-item");
		path_elem = jQuery(parent).find(path_elem_s)[0].textContent;
		path = Array("parameters", path_elem, "description");
		id_edit_elem = path.join("-");
		addInputEdit("large-input", "#" + jQuery(parent).closest(".operation-params").attr("id") + " .param-property[data-label='" + path_elem + "'] " + dom_param_description);
	});

	jQuery(dom_left_main_title).each(function (index, item_left_title) {
		path_elem = jQuery(item_left_title).attr("label");
		path = Array("paths", path_elem, "tags");
		id_edit_elem = path.join("-");
		addInputEdit("top-input", ".resources[label='" + path_elem + "']");
	});

	jQuery(
		dom_title + ", " +
		dom_proj_title + ", " +
		dom_proj_description + ", " +
		dom_api_version + ", " +
		dom_base_url + ", " +
		dom_description + ", " +
		dom_param_description + ", " +
		dom_left_main_title
	).on({
		mouseenter: function() {
			buffer = jQuery(this).find("." + class_input);
			jQuery(buffer).fadeIn();
			jQuery(buffer).on("focus", function () {
				jQuery("." + class_input).filter(function () {
					return jQuery(this).css("display") == "block";
				}).not(jQuery(buffer)).css("display", "none");
				jQuery(buffer).on("keyup", key_up);
			});
		},
		mouseleave: function() {
			buffer = jQuery(this).find("." + class_input);
			if (!jQuery(buffer).is(":focus")) {
				jQuery(buffer).css("display", "none");
				jQuery(buffer).off();
			}
		}
	});

	jQuery("." + class_save).click(function () {
		blob = new Blob(["var jsonAPI =\n" + JSON.stringify(jsonAPI, null, '\t')], {type: "text/json;charset=utf-8"});
		if(saveAs(blob, default_lang + ".js")) {
			$("body").prepend(button_update);
		}
	});

	return true;
}
//=============================================================== End Functions ===============================================================//



//=============================================================== Main function ===============================================================//
(function ($) {
	var langs = [];																					// Array langs
	var block_langs = "";																			// HTML code with block langs
	var class_block = "langs";																		// Class for block langs
	var class_lang = "langs__item";																	// Class for lang in Array langs
	var class_error = "error_message";																// Class for error
	var class_error_edit_mode = "error_edit_mode";													// Class for error in edit mode
	var error_message = "Incorrect config file!";													// Message for error
	var error_edit_mode = "Conflict with DOM elements";												// Message for error in edit mode
	var default_lang = "";																			// Default lang
	var multilang_folder = "multilang";																// Default folder for multilang scripts
	var time_limit = 24 * 3600 * 1000;																// 24 hours - limit for localStorage

	addStyle();																						// Add styles for multilang block

	if (liveDefaultLang(time_limit) === false || config.clear === true) {							// If time is up or clear mode on
		localStorage.removeItem("default_lang");													// Clear localStorage (default
		localStorage.removeItem("time");															// lang and time)
	}

	default_lang = (localStorage.default_lang) ? localStorage.default_lang : config.default_lang;	// Default lang

	addScript(multilang_folder + "/templatelang/" + config.default_translator + ".js");				// Add translator

	addScript(multilang_folder + "/datalang/" + default_lang+ ".js");								// Add data lang
	addScript(multilang_folder + "/templatelang/" + default_lang + ".js");							// Add tempate lang

	addScript(multilang_folder + "/lib/blob.js");													// Add libs for
	addScript(multilang_folder + "/lib/filesaver.js");												// save files


	$(document).ready(function () {																	// After document loading
		langs = getLangs(config);																	// Get langs

		block_langs = "<div class='" + class_block + "'>\n";										// Block for langs
		if (langs !== null) {																		// If langs isn't empty
			langs.forEach(function (lang, i, langs) {												// Each lang
				class_item = (lang == default_lang) ? class_lang + " " + class_lang + "-active" : class_lang;			// Assign active
				block_langs += "	<button id='lang_" + i + "' class='" + class_item + "'>" + lang + "</button>\n";	// Add button lang
			});
		} else {
			block_langs += "	<div class='" + class_error + "'>" + error_message + "</div>\n";						// Add error message
		}
		block_langs += "</div>\n";																	// End block for langs

		$("body").prepend(block_langs);																// Add block in HTML document

		block_langs = "";
		if (langs !== null) {																		// If langs isn't empty
			block_langs += "	<script>\n";
			block_langs += "		jQuery(document).ready(function() {\n";											// Add
			langs.forEach(function (lang, i, langs) {
				block_langs += "		jQuery('#lang_" + i + "').on('click', function () {\n";						// script
				block_langs += "			localStorage.default_lang = '" + lang + "';\n";							// for
				block_langs += "			localStorage.time = '" + (new Date()).getTime() + "';\n";				// switching
				block_langs += "			window.location.reload();\n";											// between
				block_langs += "		});\n";																		// langs
			});
			block_langs += "		});\n";
			block_langs += "	</script>\n";
		}

		$("." + class_block).append(block_langs);													// Add block in HTML document


		if (config.edit_mode) {																		// If edit mode on
			setTimeout(function () {																// in config
				if (!editMode(default_lang)) {														// If edit mode
					$("body").prepend(
						"<div class='" + class_error + " " +
						class_error_edit_mode + "'>" +
						error_edit_mode + "</div>"
					);																				// Add error block with error message
				}
			}, 1000);
		}
	});
})(jQuery);
//============================================================= End Main function =============================================================//