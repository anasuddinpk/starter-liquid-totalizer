/**
 * Script for Starter Liquid Totalizer.
 *
 * @package starter-liquid-totalizer
 */

jQuery(document).ready(
	function ($) {

		// Checking if all input fields are filled or not.
		$.fn.AllFieldsValidation = function () {
			let isFiled = true;
			$('input.slt-input-fields').each(
				function () {
					if ($(this).val() == '') {
						isFiled = false;
					}
				}
			);
			return isFiled;
		}

		// On changing input fields.
		$('input.slt-input-fields').change(
			function () {
				$.fn.ValidateStarterLiquid_pH();
				$.fn.ValidateCooledSweetTea_pH();
				$.fn.ValidateDesired_pH();

				$.fn.EnableCalculateButton();
			}
		);

		// On changing the Kombucha size unit.
		$('select[name=slt-kombucha-unit]').change(
			function () {
				let selectedValue = this.value;
				if (selectedValue == 'gallons') {
					$('input#SLT_Kombucha_Size').attr('placeholder', 'Number of Gallons');
				} else if (selectedValue == 'liters') {
					$('input#SLT_Kombucha_Size').attr('placeholder', 'Number of Liters');
				}
			}
		);

		// Enabling the Calculate button if all fields are filled.
		$.fn.EnableCalculateButton = function () {
			if ($.fn.AllFieldsValidation() && $('#SLT_Required_PH').hasClass('slt-valid') && $('#SLT_SL_PH').hasClass('slt-valid') && $('#SLT_CT_PH').hasClass('slt-valid')) {
				$('button#SLT_Calculate_Btn').attr('disabled', false);
			} else {
				$('button#SLT_Calculate_Btn').attr('disabled', true);
			}
		}

		// Resetting all input fields & disabling Calculate button.
		$('button#SLT_Reset_Btn').click(
			function () {
				$('input.slt-input-fields').each(
					function () {
						$(this).val('');
					}
				);

				$('button#SLT_Calculate_Btn').attr('disabled', true);
				$('select[name=slt-kombucha-unit]').prop("selectedIndex", 0);
				$('span.slt-unselectable').css(
					{
						'opacity': '0',
						transition: 'opacity 0.5s ease-in-out'
					}
				);
			}
		);

		// On changing the value of Starter Liquid pH.
		$('input#SLT_SL_PH').change(
			function () {
				$.fn.ValidateStarterLiquid_pH();
			}
		);

		// On changing the value of Cooled Sweet Tea pH.
		$('input#SLT_CT_PH').change(
			function () {
				$.fn.ValidateCooledSweetTea_pH();
			}
		);

		// Validating Starter Liquid pH.
		$.fn.ValidateStarterLiquid_pH = function () {
			let InputPh = $('input#SLT_SL_PH').val();

			if (InputPh <= 4) {
				$('span#SLT_SL_Validation').css(
					{
						'opacity': '0',
						transition: 'opacity 0.5s ease-in-out'
					}
				);
				$('input#SLT_SL_PH').addClass(' slt-valid');
			} else {
				$('span#SLT_SL_Validation').css(
					{
						'opacity': '1',
						transition: 'opacity 0.5s ease-in-out'
					}
				);
				$('input#SLT_SL_PH').removeClass('slt-valid');
			}

			$.fn.EnableCalculateButton();
		}

		// Validating Cooled Sweet Tea pH.
		$.fn.ValidateCooledSweetTea_pH = function () {
			let InputPh = $('input#SLT_CT_PH').val();

			if (InputPh < 7) {
				if ($('input#SLT_CT_PH').val() != '' && InputPh <= $('input#SLT_SL_PH').val()) {
					$('input#SLT_CT_PH').val(Number($('input#SLT_SL_PH').val()) + 0.5);
				}
				$('span#SLT_CT_Validation').css(
					{
						'opacity': '0',
						transition: 'opacity 0.5s ease-in-out'
					}
				);
				$('input#SLT_CT_PH').addClass(' slt-valid');
			} else {
				$('span#SLT_CT_Validation').css(
					{
						'opacity': '1',
						transition: 'opacity 0.5s ease-in-out'
					}
				);
				$('input#SLT_CT_PH').removeClass('slt-valid');
			}

			$.fn.EnableCalculateButton();
		}

		// Validating desired pH value.
		$.fn.ValidateDesired_pH = function () {
			let staterLiquid_ph = $('#SLT_SL_PH').val();
			let cooledSweetTea_ph = $('#SLT_CT_PH').val();
			let desired_ph = $('#SLT_Required_PH').val();

			if (desired_ph != '' && desired_ph < 3.5 || desired_ph > 4.5) {
				$('span#SLT_Required_PH_Validation').html('Invalid value! You must begin your brew between the pH of 3.5 and 4.5');
				$('span#SLT_Required_PH_Validation').css(
					{
						'opacity': '1',
						transition: 'opacity 0.5s ease-in-out'
					}
				);

				$('#SLT_Required_PH').removeClass('slt-valid');
			}
			else if (desired_ph != '' && desired_ph < staterLiquid_ph || desired_ph > cooledSweetTea_ph) {
				$('span#SLT_Required_PH_Validation').html('Your brew must start between the pH of Starter Liquid and Cooled Sweet Tea');
				$('span#SLT_Required_PH_Validation').css(
					{
						'opacity': '1',
						transition: 'opacity 0.5s ease-in-out'
					}
				);

				$('#SLT_Required_PH').removeClass('slt-valid');
			}
			else {
				$('span#SLT_Required_PH_Validation').css(
					{
						'opacity': '0',
						transition: 'opacity 0.5s ease-in-out'
					}
				);

				$('#SLT_Required_PH').addClass(' slt-valid');
			}
		}

		// Throwing error by desired pH validations.
		$('input.slt-ph-required').change(
			function () {
				$.fn.ValidateDesired_pH();
				$.fn.EnableCalculateButton();
			}
		);

		// On clicking the Calculate button.
		$('button#SLT_Calculate_Btn').click(
			function () {
				$.fn.AllCalculations();
			}
		);

		// Starter Liquid Totalizer all calculations.
		$.fn.AllCalculations = function () {

			let KombuchaSize = $('input#SLT_Kombucha_Size').val();
			let StarterLiquid_pH = $('input#SLT_SL_PH').val();
			let CooledTea_pH = $('input#SLT_CT_PH').val();;
			let Desired_pH = $('input#SLT_Required_PH').val();;

			let MatrixA = math.matrix(
				[
					[Math.pow(10, -StarterLiquid_pH), 1],
					[Math.pow(10, -CooledTea_pH), 1]
				]
			);

			let MatrixB = math.matrix(
				[
					[Math.pow(10, -Desired_pH) * KombuchaSize, KombuchaSize]
				]
			);

			let MatrixC = math.inv(MatrixA);

			let MatrixD = math.multiply(MatrixB, MatrixC);

			let RequiredStarterLiquid = Number.parseFloat(MatrixD.subset(math.index(0, 0))).toFixed(2);
			let RequiredCooledTea = Number.parseFloat(MatrixD.subset(math.index(0, 1))).toFixed(2);

			let StarterLiquid_Percentage = Number.parseFloat((MatrixD.subset(math.index(0, 0)) / (Number(MatrixD.subset(math.index(0, 0))) + Number(MatrixD.subset(math.index(0, 1))))) * 100).toFixed(2);
			let CooledTea_Percentage = Number.parseFloat((MatrixD.subset(math.index(0, 1)) / (Number(MatrixD.subset(math.index(0, 0))) + Number(MatrixD.subset(math.index(0, 1))))) * 100).toFixed(2);

			$('span#SLT_SL_Result').html(RequiredStarterLiquid);
			$('span#SLT_CT_Result').html(RequiredCooledTea);
			$('span.SLT_Kombucha_Result_Unit').html($('select[name=slt-kombucha-unit]').val());

			$('span#SLT_SL_Percent_Result').html(StarterLiquid_Percentage);
			$('span#SLT_CT_Percent_Result').html(CooledTea_Percentage);

			$('span#SLT_Comment_SL').html(RequiredStarterLiquid + ' ' + $('select[name=slt-kombucha-unit]').val() + ' of pH ' + StarterLiquid_pH + ' Starter Liquid');
			$('span#SLT_Comment_CT').html(RequiredCooledTea + ' ' + $('select[name=slt-kombucha-unit]').val() + ' of pH ' + CooledTea_pH + ' Cooled Sweet Tea');
			$('span#SLT_Comment_Kombucha').html(KombuchaSize + ' ' + $('select[name=slt-kombucha-unit]').val() + ' batch of Kombucha at a pH of ' + Desired_pH);

			$('div.slt-results').show(500);
		}

	}
);
