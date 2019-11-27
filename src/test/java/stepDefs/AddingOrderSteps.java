package stepDefs;

import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import pages.OrdersHomePage;
import pages.OrdersPage;

import java.util.List;
import java.util.Map;

public class AddingOrderSteps {
    OrdersHomePage ordersHomePage = new OrdersHomePage();
    OrdersPage ordersPage = new OrdersPage();
    int initialOrderCount;

    @Then("^User clicks on Order$")
    public void user_clicks_on_Order() throws Throwable {
        initialOrderCount = ordersHomePage.orderRows.size();
        ordersHomePage.OrderButton.click();

    }

    @Then("^User creates new order$")
    public void user_creates_new_order(DataTable dataTable) throws Throwable {

        List<Map<String, Object>> listOfMaps = dataTable.asMaps(String.class, Object.class);

        System.out.println(listOfMaps.get(0).get("Quantity"));
        List<Map<String,Object>> listOFMaps=dataTable.asMaps(String.class,Object.class);
        Select select = new Select(ordersPage.productDropDown);
        select.selectByVisibleText(listOFMaps.get(0).get("Product Name").toString());
        ordersPage.quantity.sendKeys(listOFMaps.get(0).get("Quantity").toString());
        ordersPage.customerName.sendKeys(listOFMaps.get(0).get("Customer Name").toString());
        ordersPage.streetInput.sendKeys(listOFMaps.get(0).get("Street").toString());
        ordersPage.cityInput.sendKeys(listOFMaps.get(0).get("City").toString());
        ordersPage.stateInput.sendKeys(listOFMaps.get(0).get("State").toString());
        ordersPage.zipCodeinput.sendKeys(listOFMaps.get(0).get("Zip").toString());
        ordersPage.visaCard.click();
        ordersPage.cardNum.sendKeys(listOFMaps.get(0).get("Card Number").toString());
        ordersPage.expirationDate.sendKeys(listOFMaps.get(0).get("Expired Date").toString());
        ordersPage.proccessButton.click();
        Thread.sleep(4000);

    }

    @Then("^User verifies Order is created$")
    public void user_verifies_Order_is_created() throws Throwable {

    }
    @Then("^User clicks on order$")
    public void user_clicks_on_order() throws Throwable {

    }

    @Then("^User verifies order \"([^\"]*)\" created$")
    public void user_verifies_order_created(String arg1) throws Throwable {

    }
    @Then("^User verifies Order \"([^\"]*)\" created$")
    public void user_verifies_Order_created(String isCondition) throws Throwable {
        ordersPage.ordersViewButton.click();
        Thread.sleep(10000);
        int afterOrderCreated = ordersHomePage.orderRows.size();
        if (isCondition.equalsIgnoreCase("is")) {
            Assert.assertEquals("Initial order number is: " + initialOrderCount + "\n" +
                            "After you created order the row number is: " + afterOrderCreated,
                    initialOrderCount + 1, afterOrderCreated);
        } else {
            Assert.assertEquals("Initial order number is: " + initialOrderCount + "\n" +
                            "After you created order the row number is: " + afterOrderCreated,
                    initialOrderCount, afterOrderCreated);
        }
    }@Then("^User deletes \"([^\"]*)\" from table$")
    public void user_deletes_from_table(String name) throws Throwable {

        for(int i=0; i<ordersHomePage.names.size(); i++){
            if(ordersHomePage.names.get(i).getText().equalsIgnoreCase(name)){
                ordersHomePage.checkBoxes.get(i).click();

            }
        }
        Thread.sleep(3000);
        ordersHomePage.deleteButton.click();
        Thread.sleep(3000);



    }

    @Then("^Validate that \"([^\"]*)\" is deleted$")
    public void validate_that_is_deleted(String name) throws Throwable {

        for(WebElement element: ordersHomePage.names){
            Assert.assertFalse(element.getText().equalsIgnoreCase(name));
        }

    }


}
