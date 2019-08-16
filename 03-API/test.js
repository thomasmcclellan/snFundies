function shrink() {
  var textboxes = [
    "u_legal_contract.u_change_of_control_details",
    "u_legal_contract.short_description",
    "u_legal_contract.u_vendor_s_notification_address",	 
    "u_legal_contract.u_reference",
    "u_legal_contract.u_annual_cost_of_agreement",
    "u_legal_contract.u_cost_amount_as_of",
    "u_legal_contract.u_early_termination_date_reason_details",
    "u_legal_contract.u_no_cause_termination_penalties_details",
    "u_legal_contract.u_payment_terms",
    "u_legal_contract.u_annual_cost_of_agreement",
    "u_legal_contract.u_cost_amount_as_of",
    "u_legal_contract.u_early_termination_date_reason_details",
    "u_legal_contract.u_no_cause_termination_penalties_details",
    "u_legal_contract.u_governing_law",
    "u_legal_contract.u_venue",
    "u_legal_contract.u_our_assignment_details",
    "u_legal_contract.u_employee_s_assignment_details",
    "u_legal_contract.u_training_costs",
    "u_legal_contract.u_training_specifications",
    "u_legal_contract.u_training_repayment_obligation",
    "u_legal_contract.u_eol_sale_price",
    "u_legal_contract.u_choice_1",
    "u_legal_contract.u_their_notification_address",
    "u_legal_contract.u_as_of",
    "u_legal_contract.u_annual_baseline_revenue",
    "u_legal_contract.u_ce_cyber_fte_details",
    "u_legal_contract.u_ce_cyber_informatics_users",
    "u_legal_contract.u_customer_agent_contract_details",
    "u_legal_contract.u_past_agreement_details",
    "u_legal_contract.u_financial_threshold_value",
    "u_legal_contract.u_financial_threshold_detail",
    "u_legal_contract.u_customer_terms_detail",
    "u_legal_contract.u_service_fee_percentage",
    "u_legal_contract.u_service_fee_details",
    "u_legal_contract.u_trimedx_ability_to_assign_to_customer_details",
    "u_legal_contract.u_htm_details",
    "u_legal_contract.u_fleet_informatics_users",
    "u_legal_contract.u_capital_planning_tool_details",
    "u_legal_contract.u_capital_planing_support_details",
    "u_legal_contract.u_cma_informatics_details",
    "u_legal_contract.u_clinical_engineering_informatics_details",
    "u_legal_contract.u_end_of_life_fee_percentage",
    "u_legal_contract.u_our_limitation_liability",
    "u_legal_contract.u_state",
    "u_legal_contract.u_marketing_release_details",
    "u_legal_contract.u_cec_required_details",
    "u_legal_contract.u_change_inventory_requirements_details",
    "u_legal_contract.u_non_standard_reporting_details",
    "u_legal_contract.u_non_standard_survey_language_details",
    "u_legal_contract.u_gpo_details",
    "u_legal_contract.u_mme_effective_date",
    "u_legal_contract.u_mme_commencement_date",
    "u_legal_contract.u_mme_compensation",
    "u_legal_contract.u_mme_compensation_details",
    "u_legal_contract.u_mme_mcpi_details",
    "u_legal_contract.u_mme_non_standard_terms",
    "u_legal_contract.u_mme_facilities",
    "u_legal_contract.u_mcpi_percentage",
    "u_legal_contract.u_mcpi_details",
    "u_legal_contract.u_performance_goals_commitment_guarentees_details",
    "u_legal_contract.u_performance_goals_penalties_details",
    "u_legal_contract.u_standard_hours_of_service_details",
    "u_legal_contract.u_site_staff_details",
    "u_legal_contract.u_non_standard_personnel_details",
    "u_legal_contract.u_our_assignment_details",
    "u_legal_contract.u_customer_assignment_details",
    "u_legal_contract.u_notes",
    "u_legal_contract.description",
    "u_legal_contract.u_our_non_solicitation_detail",
    "u_legal_contract.u_string_8", // Their Non-Solicitation Details
    "u_legal_contract.u_string_11", // Third Party NST Detail
    "u_legal_contract.u_string_15", // Attorney Fee Details
    "u_legal_contract.u_string_12", // Interest Details
    "u_legal_contract.u_string_9", // Recover Collection Fee Details
    "u_legal_contract.u_direct_trimedx_ability_to_terminate_details",
    "u_legal_contract.u_direct_ability_assign_customer_details",
    "u_legal_contract.u_customer_ability_to_terminate_details",
    "u_legal_contract.u_customer_assign_customer_details",
    "u_legal_contract.u_direct_contract_detail", 
  ];
	
	var tc = [];
	var temp;

  for (var x in textboxes) {
	  temp = '';
	  temp = textboxes[x];
// 	  alert(temp, textboxes[x]);
    document.getElementById(temp).style.height = "0px";
// 	alert(textboxes[x]);
	tc.push(temp);
  }

  return tc;

}

console.log(shrink())