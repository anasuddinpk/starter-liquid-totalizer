<div class="starter-liquid-totalizer">

    <div class="slt-calculator">

        <div class="slt-row">

            <div class="slt-col">

                <div class="slt-first-col">

                    <div class="slt-first-col-child">
                        <div>
                            <label for="SLT_Kombucha_Size">Size batch of Kombucha</label>
                            <input type="number" class="slt-input-fields" id="SLT_Kombucha_Size"
                                placeholder="Number of Gallons">
                        </div>
                        <select name="slt-kombucha-unit">
                            <option value="gallons">Gallons</option>
                            <option value="liters">Liters</option>
                        </select>
                    </div>

                    <span class="slt-invalid-feedback slt-unselectable">Invalid value of Kombucha size batch, please
                        enter valid value</span>

                </div>
            </div>

            <div class="slt-col">
                <label for="SLT_SL_PH">pH of your Starter Liquid</label>
                <input type="number" step='0.01' class="slt-input-fields slt-ph-given" id="SLT_SL_PH"
                    placeholder="Should be less than 4">
                <span class="slt-invalid-feedback slt-unselectable" id="SLT_SL_Validation">Invalid! pH of Starter Liquid
                    should be less than or equal to 4,
                    i.e it must be Acidic</span>
            </div>

        </div>

        <div class="slt-row">

            <div class="slt-col">
                <label for="SLT_CT_PH">pH of your Cooled Sweet Tea</label>
                <input type="number" step='0.01' class="slt-input-fields slt-ph-given" id="SLT_CT_PH"
                    placeholder="Should be less than 7">
                <span class="slt-invalid-feedback slt-unselectable" id="SLT_CT_Validation">Invalid! pH of Cooled Sweet
                    Tea should be less than
                    7, i.e it must be Acidic</span>
            </div>

            <div class="slt-col">
                <label for="SLT_Required_PH">Your desired starting pH</label>
                <input type="number" step='0.01' class="slt-input-fields slt-ph-required" id="SLT_Required_PH"
                    placeholder="Must start between 3.5 and 4.5">
                <span class="slt-invalid-feedback slt-unselectable" id="SLT_Required_PH_Validation">You must begin your
                    Brew b/w pH of Starter Liquid and Cooled Sweet Tea</span>
            </div>

        </div>

        <div class="slt-row slt-btn-row">

            <div class="slt-col">
                <button id="SLT_Calculate_Btn" disabled>Calculate</button>
                <button id="SLT_Reset_Btn">Reset</button>
            </div>

        </div>

    </div>

    <div class="slt-results">

        <div class="slt-row">
            <h3>Required Volumes & Percentages of Starter Liquid and Cooled Sweet Tea</h3>
        </div>

        <div class="slt-row">
            <table id="SLT_Result_Table">
                <thead>

                    <th style="width: 50%;"></th>
                    <th class="slt-thead-heads">Requried Volume</th>
                    <th class="slt-thead-heads">Percentage Breakdown</th>

                </thead>
                <tbody>

                    <tr>
                        <td><b>Required Starter Liquid<b></td>
                        <td>
                            <span id="SLT_SL_Result"></span>&nbsp;&nbsp;
                            <span class="SLT_Kombucha_Result_Unit"></span>
                        </td>
                        <td><span id="SLT_SL_Percent_Result"></span>&nbsp;<span>%</span></td>
                    </tr>
                    <tr>
                        <td><b>Required Cooled Sweet Tea</b></td>
                        <td>
                            <span id="SLT_CT_Result"></span>&nbsp;&nbsp;
                            <span class="SLT_Kombucha_Result_Unit"></span>
                        </td>
                        <td><span id="SLT_CT_Percent_Result"></span>&nbsp;<span>%</span></td>
                    </tr>

                </tbody>
            </table>
        </div>

        <div class="slt-row">
            <p>You will need <span class="slt-comment-answer" id="SLT_Comment_SL"></span> and <span
                    class="slt-comment-answer" id="SLT_Comment_CT"></span> to start a <span
                    id="SLT_Comment_Kombucha"></span>.</p>
        </div>

    </div>

</div>