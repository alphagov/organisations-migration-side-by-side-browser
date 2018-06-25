$(function() {
  // Set current and new URL prefixes
  var CURRENT_URL_PREFIX = "https://www.gov.uk/government/organisations/"
  var NEW_URL_PREFIX = "https://www-origin.staging.publishing.service.gov.uk/government/organisations/"

  // Load list of organisations
  var organisations_options = [
    "<option value=\"\">Choose an organisation</option>"
  ];

  organisations.forEach(function(organisation) {
    organisations_options.push("<option value=\"" + organisation.slug + "\">" + organisation.name + "</option>")
  });

  $("#organisation-selector").append(
    $("<select></select>").append(
      organisations_options.join("\n")
    )
  );

  // Make the organisation selector change the <iframe> destination
  $("#organisation-selector select").change(function() {
    organisation_slug = this.value;
    $("#current-page").attr("src", CURRENT_URL_PREFIX + organisation_slug);
    $("#new-page").attr("src", NEW_URL_PREFIX + organisation_slug);
  }).change();
});
