'use strict';
var path = require('path');
let csvPathTestDataAll = path.resolve('./test/utils/testDataAll.csv');
let csvPathAllReqData = path.resolve('./test/utils/allRequiredData.csv');
let csvPathOneRequiredDataMissing= path.resolve('./test/utils/OneRequiredDataMissing.csv');

let csv = require('../utils/csvTestData');
const retrmntCalculator = require('../pageObjects/home');

describe('Securian retirement calculator', () => {
        for (let i of csv.getCSVData(csvPathAllReqData)) {
        it('User should be able to submit form with all required fields filled in', async  () => {
            await retrmntCalculator.open();
            await retrmntCalculator.enterDetails(i.currentAge,i.retirementAge,i.currentIncome,
                i.spouseIncome,i.currentRetirementSavingBal,i.currentAnnualSavingsForRet,
                i.savingIncreaseRate,i.socialSecurityOption,i.maritalStatus,i.overrideSocialSecurityAmount,
                i.wantToUpdateDefault,i.additionalIncome,i.retirementDuration,i.wantToIncludeInflation,
                i.expectedInflationRat,i.retirementAnnualIncomePercent,i.preRetirementInvestReturn,
                i.postRetirementInvestReturn
            );
            await expect(retrmntCalculator.resultMessage).toBeDisplayed();
        });
    }

    for (let i of csv.getCSVData(csvPathOneRequiredDataMissing)) {
        it('User should not be able to submit form if any required field is not filled in', async  () => {
            await retrmntCalculator.open();
            await retrmntCalculator.enterDetails(i.currentAge,i.retirementAge,i.currentIncome,
                i.spouseIncome,i.currentRetirementSavingBal,i.currentAnnualSavingsForRet,
                i.savingIncreaseRate,i.socialSecurityOption,i.maritalStatus,i.overrideSocialSecurityAmount,
                i.wantToUpdateDefault,i.additionalIncome,i.retirementDuration,i.wantToIncludeInflation,
                i.expectedInflationRat,i.retirementAnnualIncomePercent,i.preRetirementInvestReturn,
                i.postRetirementInvestReturn
            );
            await expect(retrmntCalculator.requiredInputMissingAlert).toHaveText('Please fill out all required fields');
            await expect(retrmntCalculator.resultMessage).not.toBeDisplayed();
            
        });
    }

    it('Additional Social Security fields should display if Social Security benefits toggle is selected as Yes', async () => {
        await retrmntCalculator.open();
        await retrmntCalculator.socialSecurityYesOption.click();
        await expect(retrmntCalculator.maritalStatusMarried).toBeDisplayed();
        await expect(retrmntCalculator.maritalStatusSingle).toBeDisplayed();
        await expect(retrmntCalculator.overrideSocialSecurityAmount).toBeDisplayed();
    });

    it('Additional Social Security fields should hide if Social Security benefits toggle is selected as No', async () => {
        await retrmntCalculator.open();
        await retrmntCalculator.socialSecurityNoOption.click();
        await expect(retrmntCalculator.maritalStatusMarried).not.toBeDisplayed();
        await expect(retrmntCalculator.maritalStatusSingle).not.toBeDisplayed();
        await expect(retrmntCalculator.overrideSocialSecurityAmount).not.toBeDisplayed();
    });

    for (let i of csv.getCSVData(csvPathTestDataAll)) {
        it('User should be able to submit form with all fields filled in', async  () => {
            await retrmntCalculator.open();
            await retrmntCalculator.enterDetails(i.currentAge,i.retirementAge,i.currentIncome,
                i.spouseIncome,i.currentRetirementSavingBal,i.currentAnnualSavingsForRet,
                i.savingIncreaseRate,i.socialSecurityOption,i.maritalStatus,i.overrideSocialSecurityAmount,
                i.wantToUpdateDefault,i.additionalIncome,i.retirementDuration,i.wantToIncludeInflation,
                i.expectedInflationRat,i.retirementAnnualIncomePercent,i.preRetirementInvestReturn,
                i.postRetirementInvestReturn
            );
           await expect(retrmntCalculator.resultMessage).toBeDisplayed();
            
        });
    }

    for (let i of csv.getCSVData(csvPathTestDataAll)) {
        it('User should be able to update default calculator values', async  () => {
            await retrmntCalculator.open();
            await retrmntCalculator.enterDetails(i.currentAge,i.retirementAge,i.currentIncome,
                i.spouseIncome,i.currentRetirementSavingBal,i.currentAnnualSavingsForRet,
                i.savingIncreaseRate,i.socialSecurityOption,i.maritalStatus,i.overrideSocialSecurityAmount,
                i.wantToUpdateDefault,i.additionalIncome,i.retirementDuration,i.wantToIncludeInflation,
                i.expectedInflationRat,i.retirementAnnualIncomePercent,i.preRetirementInvestReturn,
                i.postRetirementInvestReturn
            );
           await expect(retrmntCalculator.resultMessage).toBeDisplayed();
            
        });
    }
});


