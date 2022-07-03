

const Page = require('./page');

/**
 * page containing specific selectors and methods for a specific page
 */
class home extends Page {
    /**
     * define selectors using getter methods
     */
    get currentAge () {
        return $('#current-age');
    }

    get retirementAge () {
        return $('#retirement-age');
    }

    get currentIncome () {
        return $('#current-income');
    }

    get spouseIncome () {
        return $('#spouse-income');
    }

    get currentRetirementSavingBal () {
        return $('#current-total-savings');
    }

    get currentAnnualSavingsForRet () {
        return $('#current-annual-savings');
    }

    get savingIncreaseRate () {
        return $('#savings-increase-rate');
    }


    get socialSecurityYesOption () {
        return $('#yes-social-benefits').nextElement();
    }

    get socialSecurityNoOption () {
        return $('#no-social-benefits').nextElement();
    }

    get maritalStatusSingle () {
        return $('label=Single');
    }

    get maritalStatusMarried () {
        return $('label=Married');
    }
    get overrideSocialSecurityAmount () {
        return $('#social-security-override');
    }
    
    get adjustDefaultValues(){
            return $('=Adjust default values')
    }

    get additionalIncome () {
        return $('#additional-income');
    }
    
    get retirementDuration () {
        return $('#retirement-duration');
    }


    get excludeInflation () {
        return $('label[for="exclude-inflation"]');
    }

    get IncludeInflation () {
        return $('label[for="include-inflation"]');
    }

    get expectedInflationRate () {
        return $('#expected-inflation-rate');
    }
    
    get retirementAnnualIncomePercent () {
        return $('#retirement-annual-income');
    }

    get preRetirementInvestReturn () {
        return $('#pre-retirement-roi');
    }

    get postRetirementInvestReturn () {
        return $('#post-retirement-roi');
    }

    get buttonSaveChanges() {
        return $('button=Save changes')
    }

    get buttonCalculate() {
        return $('button=Calculate')
    }

    get buttonCalculate() {
        return $('button=Calculate')
    }

    get buttonClearForm() {
        return $('button=Clear form')
    }

    get resultMessage() {
        try {
            $('#result-message').waitForExist(80000);
        } catch (error) {
            
        }
        return $('#result-message')
    }

    get requiredInputMissingAlert() {
        $('#calculator-input-alert-desc').waitForExist(80000);
        return $('#calculator-input-alert-desc')
    }
    
    get processing() {
        return $('p=Processing...')
    }

async enterDetails(currentAge,retirementAge,currentIncome,spouseIncome,
    currentRetirementSavingBal,currentAnnualSavingsForRet,savingIncreaseRate,socialSecurityOption,
    maritalStatus,overrideSocialSecurityAmount,wantToUpdateDefault,additionalIncome,retirementDuration,
    wantToIncludeInflation,expectedInflationRat,retirementAnnualIncomePercent,preRetirementInvestReturn,
    postRetirementInvestReturn
    ){
        await this.currentAge.setValue(currentAge);
        browser.pause(5000);
        await this.retirementAge.setValue(retirementAge);
        await this.currentIncome.click();
        browser.keys(currentIncome);
        browser.pause(5000);
        await this.spouseIncome.click();
        browser.keys(spouseIncome);
        browser.pause(100000);
        await this.currentRetirementSavingBal.click();
        browser.keys(currentRetirementSavingBal);
        browser.pause(5000);
        await this.currentAnnualSavingsForRet.setValue(currentAnnualSavingsForRet);
        browser.pause(5000);
        await this.savingIncreaseRate.setValue(savingIncreaseRate);
        browser.pause(5000);
        if(socialSecurityOption=='Yes'){
        await this.socialSecurityYesOption.click();
        browser.pause(5000);
        if(maritalStatus=='Married'){
        await this.maritalStatusMarried.click();
        }
        if(maritalStatus=='Single'){
            await this.maritalStatusSingle.click();
        }
        browser.pause(5000);
        await this.overrideSocialSecurityAmount.click();
        browser.keys(overrideSocialSecurityAmount);
        browser.pause(5000);
        }
        if(wantToUpdateDefault=='Yes'){
        await this.adjustDefaultValues.click();
        browser.pause(50000);
        await this.additionalIncome.click();
        browser.keys(additionalIncome);
        browser.pause(5000);
        await this.retirementDuration.setValue(retirementDuration);
        if(wantToIncludeInflation=='Yes') {
        await this.IncludeInflation.click();
        browser.pause(5000);
        await this.expectedInflationRate.setValue(expectedInflationRat);
        }
        await this.retirementAnnualIncomePercent.setValue(retirementAnnualIncomePercent);
        await this.preRetirementInvestReturn.setValue(preRetirementInvestReturn);
        await this.postRetirementInvestReturn.setValue(postRetirementInvestReturn);
        await this.buttonSaveChanges.click();
        }
        await this.buttonCalculate.click();
        browser.pause(10000);
}
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('insights-tools/retirement-calculator.html');
    }
}

module.exports = new home();
