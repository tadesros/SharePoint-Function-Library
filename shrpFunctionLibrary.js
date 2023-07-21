//*************** RESUSABLE FUNCTIONS *********************/

/**
 * Function: SetDropDown: Set the value of a dropdown given the Strings FieldName  and Value
 **/
function setDropdown(fieldName, dropDownValue) {	
	document.querySelector(`[title="${fieldName}"]`).value = dropDownValue;
}
/**
 * Hide a field - Send the name of the Field as a String
 * **/
function hideField(fieldName) {
	document.querySelector(`[title="${fieldName}"]`).closest("tr").style.display =
		"none";	
}
/**
 * FUNCTION: Lock Field - Send the fieldName
 */
function lockField(fieldToLock) {
	let status = (document.querySelector(
		'[title="' + fieldToLock + '"]'
	).disabled = true);
}
/**
 * FUNCTION: Un-Lock Field
 */
function unlockField(fieldToLock) {
	let status = (document.querySelector(
		'[title="' + fieldToLock + '"]'
	).disabled = false);
}
