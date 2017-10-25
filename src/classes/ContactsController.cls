public with sharing class ContactsController {
    @AuraEnabled
    public static List<Contact> getContacts(String accId) {
        system.debug('@accId: ' + accId);
        List<Contact> contacts = new List<Contact>();        
        if(!String.isEmpty(accId)){
            contacts = [SELECT Id, Name, MailingStreet, Phone, Email, LeadSource FROM Contact WHERE AccountId = :accId ];
        }        
        
        return contacts;
    }
}