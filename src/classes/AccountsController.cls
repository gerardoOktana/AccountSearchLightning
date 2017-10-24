public class AccountsController {
  @AuraEnabled
  public static List<Account> getAccounts(String filter) {      
      List<Account> accs = new List<Account>();
      if(!String.isEmpty(filter)) {
          String newSearchText = '%'+filter+'%';
          accs = [SELECT Id, Name, Site, BillingState, Phone, Type FROM Account WHERE Name LIKE :newSearchText ORDER BY Name ASC];
      } else {
          accs = [SELECT Id, Name, Site, BillingState, Phone, Type FROM Account ORDER BY Name ASC];
      }
    return accs;
  }
}