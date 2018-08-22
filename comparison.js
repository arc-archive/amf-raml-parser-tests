(function(scope) {
  scope.apis = [
    'apis/Drivetrain-BrokerRep-System-API-2.0.0-fat-raml.zip',
    'apis/a-dataset-api-1.0.1-fat-raml.zip',
    'apis/account-data-api-2.0.0-fat-raml.zip',
    'apis/accounts-1.0.0-fat-raml.zip',
    'apis/activemq-message-api-1.0.0-fat-raml.zip',
    'apis/address-experience-api-1.0.4-fat-raml.zip',
    'apis/address-validate-api-1.0.0-fat-raml.zip',
    'apis/agent-cumberland-experience-api-2.0.3-fat-raml.zip',
    'apis/agent-experience-api-2.0.9-fat-raml.zip',
    'apis/agent-information-1.0.0-fat-raml.zip',
    'apis/agent-registry-0.9.2-fat-raml.zip',
    'apis/agents-system-api-1.0.0-fat-raml.zip',
    'apis/aggregation-api-1.0.0-fat-raml.zip',
    'apis/airline-service-1.0.0-fat-raml.zip',
    'apis/al-metapack-api-1.0.0-fat-raml.zip',
    'apis/amc-agent-registry-1.0.0-fat-raml.zip',
    'apis/amc-deployer-1.0.0-fat-raml.zip',
    'apis/amgn-api-sys-payment-dev-1.0.7-fat-raml.zip',
    'apis/analytics-data-channel-api-1.0.0-fat-raml.zip',
    'apis/analytics-datalake-api-meld-1.0.1-fat-raml.zip',
    'apis/anypoint-api-1.0.0-fat-raml.zip',
    'apis/anypoint-mq-1.0.0-fat-raml.zip',
    'apis/anypoint-mq-stats-api-1.0.1-fat-raml.zip',
    'apis/api-sys-emp-db-1.0.0-fat-raml.zip',
    'apis/apitest0-1.0.0-fat-raml.zip',
    'apis/articlemaster-1.0.0-fat-raml.zip',
    'apis/assetprocessapi-1.0.0-fat-raml.zip',
    'apis/assignment-sub-type-1.0.2-fat-raml.zip',
    'apis/assignment-type-1.0.1-fat-raml.zip',
    'apis/audit-log-query-api-1.0.4-fat-raml.zip',
    'apis/authenticationproxyservice-1.0.0-fat-raml.zip',
    'apis/authtestapi-1.0.0-fat-raml.zip',
    'apis/autodiscovery-api-3.0.0-fat-raml.zip',
    'apis/azure-blob-storage-1.0.0-fat-raml.zip',
    'apis/b2c-firebase-s-api-1.0.4-fat-raml.zip',
    'apis/batch_52-1.0.0-fat-raml.zip',
    'apis/bcs-orders-1.0.1-fat-raml.zip',
    'apis/bic-case-management-api-1.0.1-fat-raml.zip',
    'apis/bluerangers-flights-api-1.0.0-fat-raml.zip',
    'apis/bombardier_api_oauth-1.0.0-fat-raml.zip',
    'apis/bookingmanagement-raml-jo-1.0.0-fat-raml.zip',
    'apis/branch-mobile-experience-api-1.0.2-fat-raml.zip',
    'apis/brightside-api-notification-1.0.0-fat-raml.zip',
    'apis/c00189385-2.0.0-fat-raml.zip',
    'apis/ca-customer-master-api---prod-1.0.0-fat-raml.zip',
    'apis/ca-customer-master-api-preprod-1.0.0-fat-raml.zip',
    'apis/ca-customer-master-api-prod-1.0.0-fat-raml.zip',
    'apis/cache-cross-api-1.0.0-fat-raml.zip',
    'apis/cacm-api-qa-1.0.0-fat-raml.zip',
    'apis/cafs-1.0.4-fat-raml.zip',
    'apis/calendar-google-1.0.0-fat-raml.zip',
    'apis/case-00190315-1.0.0-fat-raml.zip',
    'apis/case458-1.0.0-fat-raml.zip',
    'apis/case_458_new-1.0.0-fat-raml.zip',
    'apis/catapi-statefarm-1.0.0-fat-raml.zip',
    'apis/cdm.weatherstation.api-1.0.0-fat-raml.zip',
    'apis/chs-1.0.2-fat-raml.zip',
    'apis/cisco-1.0.4-fat-raml.zip',
    'apis/clearance-pricing-apiraml-1.0.1-fat-raml.zip',
    'apis/client-process-api-1.0.0-fat-raml.zip',
    'apis/clinician--hs-provider-services-experience-api-1.0.0-fat-raml.zip',
    'apis/cloudhub-api-1.0.2-fat-raml.zip',
    'apis/cloudhub-logging-api-1.0.0-fat-raml.zip',
    'apis/communication-preference-enquiry-api-1.0.0-fat-raml.zip',
    'apis/compensation-type-1.0.4-fat-raml.zip',
    'apis/comtl-simulator-38-oauth-1.0.0-fat-raml.zip',
    'apis/configuration-property-service-1.0.1-fat-raml.zip',
    'apis/connectedbrewer-1.0.0-fat-raml.zip',
    'apis/consensusservices-1.0.0-fat-raml.zip',
    'apis/consumption-requests-5.0.0-fat-raml.zip',
    'apis/contact-documents-1.0.0-fat-raml.zip',
    'apis/contact-note-type-1.0.2-fat-raml.zip',
    'apis/contact-rating-type-1.0.0-fat-raml.zip',
    'apis/contact-status-type-1.0.1-fat-raml.zip',
    'apis/contact-type-1.0.0-fat-raml.zip',
    'apis/contactservice-1.0.0-fat-raml.zip',
    'apis/contracts-2.0.1-fat-raml.zip',
    'apis/cores-api-1.0.0-fat-raml.zip',
    'apis/course-api-harvard-1.0.0-fat-raml.zip',
    'apis/covea-customers-p-api-1.0.0-fat-raml.zip',
    'apis/covea-customers-web-x-api-1.0.1-fat-raml.zip',
    'apis/crm-contact-api-1.0.0-fat-raml.zip',
    'apis/crmaccessservice-1.0.0-fat-raml.zip',
    'apis/currencies-1.0.0-fat-raml.zip',
    'apis/customer-api-1.0.0-fat-raml.zip',
    'apis/customer-api-1.0.2-fat-raml.zip',
    'apis/customer-management-api-1.0.0-fat-raml.zip',
    'apis/customer-process-api-3.0.1-fat-raml.zip',
    'apis/customerprocessapi-1.0.0-fat-raml.zip',
    'apis/data-channel-backend-0.12.0-fat-raml.zip',
    'apis/dbank-api-process-eq2eq-1.0.0-fat-raml.zip',
    'apis/dbank-api-process-hisa-1.0.0-fat-raml.zip',
    'apis/dbank-api-process-movemoney-1.0.0-fat-raml.zip',
    'apis/dbank-api-process-rdc-1.0.0-fat-raml.zip',
    'apis/dbank-api-system-hisa-1.0.0-fat-raml.zip',
    'apis/dbank-api-system-movemoney-1.0.0-fat-raml.zip',
    'apis/dbank-api-system-rdc-1.0.1-fat-raml.zip',
    'apis/dbank_api_experience_mobile-1.0.0-fat-raml.zip',
    'apis/dbank_api_process_customer-1.0.0-fat-raml.zip',
    'apis/dbank_api_process_transaction-1.0.0-fat-raml.zip',
    'apis/dbank_api_system_billpay-1.0.0-fat-raml.zip',
    'apis/dbank_api_system_eft-1.0.0-fat-raml.zip',
    'apis/dbank_api_system_onboarding-1.0.0-fat-raml.zip',
    'apis/dbank_api_system_transaction-1.0.0-fat-raml.zip',
    'apis/dbank_customer_system-1.0.0-fat-raml.zip',
    'apis/dbg-api-dev-1.0.0-fat-raml.zip',
    'apis/dbmambo-sist-1.0.0-fat-raml.zip',
    'apis/deep-monitoring-service-1.0.9-fat-raml.zip',
    'apis/defectsprocessapi-1.0.0-fat-raml.zip',
    'apis/degreetype-1.0.0-fat-raml.zip',
    'apis/demo-1.0.0-fat-raml.zip',
    'apis/demo-jsonapi-1.0.0-fat-raml.zip',
    'apis/deployer-0.9.0-fat-raml.zip',
    'apis/device-0.0.7-fat-raml.zip',
    'apis/device-1.0.0-fat-raml.zip',
    'apis/device-enquiry-api-1.0.0-fat-raml.zip',
    'apis/devis-sipeclinicalintegration-1.0.0-fat-raml.zip',
    'apis/dexcom-1.0.0-fat-raml.zip',
    'apis/diem-type-1.0.0-fat-raml.zip',
    'apis/digex-1.0.0-fat-raml.zip',
    'apis/digital-banking-customer-process-1.0.0-fat-raml.zip',
    'apis/digital-banking-onboarding-system-1.0.0-fat-raml.zip',
    'apis/dips-nomina-4.0.0-fat-raml.zip',
    'apis/discovery-api-1.0.3-fat-raml.zip',
    'apis/document-api-2.0.1-fat-raml.zip',
    'apis/document-type-1.0.0-fat-raml.zip',
    'apis/documents-api-1.0.0-fat-raml.zip',
    'apis/dunea-api-1.0.0-fat-raml.zip',
    'apis/duxxie-experience-api1-1.0.0-fat-raml.zip',
    'apis/dynamic_shelf-api-1.1.1-fat-raml.zip',
    'apis/e-soup-1.0.1-fat-raml.zip',
    'apis/eai-commondb-errorlog-sys-2.0.1-fat-raml.zip',
    'apis/eai-drivetrain-brokerrep-sys-1.0.1-fat-raml.zip',
    'apis/eai-salesforce-broker-exp-1.1.7-fat-raml.zip',
    'apis/eai-salesforce-brokerrep-exp-1.0.7-fat-raml.zip',
    'apis/eai-salesforce-brokerrep-sys-1.0.0-fat-raml.zip',
    'apis/eai-salesforce-policy-sys-1.0.0-fat-raml.zip',
    'apis/education-1.0.3-fat-raml.zip',
    'apis/education-2-1.0.1-fat-raml.zip',
    'apis/education-basic-1.0.0-fat-raml.zip',
    'apis/el-pts-api-3.0.0-fat-raml.zip',
    'apis/eligibility-2.0.9-fat-raml.zip',
    'apis/email-type-1.0.1-fat-raml.zip',
    'apis/emp_oauth_v08-1.0.0-fat-raml.zip',
    'apis/employee-api-1.0.0-fat-raml.zip',
    'apis/employee-api-1.0.1-fat-raml.zip',
    'apis/employee-type-1.0.0-fat-raml.zip',
    'apis/employee_oauth_v08-1.0.1-fat-raml.zip',
    'apis/employment-type-1.0.0-fat-raml.zip',
    'apis/empoauth-api-1.0.0-fat-raml.zip',
    'apis/enavigator-1.0.0-fat-raml.zip',
    'apis/encryption-experience-api-1.0.1-fat-raml.zip',
    'apis/encryption-system-api-1.0.2-fat-raml.zip',
    'apis/eqb-mobile-banking-2.0.0-fat-raml.zip',
    'apis/eshwar_flt1-1.0.1-fat-raml.zip',
    'apis/ethnic-type-1.0.0-fat-raml.zip',
    'apis/etihad-1.0.0-fat-raml.zip',
    'apis/event-status-type-1.0.0-fat-raml.zip',
    'apis/event-type-1.0.0-fat-raml.zip',
    'apis/eventedapi_consumer_ent-1.0.0-fat-raml.zip',
    'apis/eventedapi_persistence-1.0.0-fat-raml.zip',
    'apis/eventedapi_persistence_1-1.0.0-fat-raml.zip',
    'apis/eventedapi_producer_ent-1.0.0-fat-raml.zip',
    'apis/eventedapi_provider-1.0.0-fat-raml.zip',
    'apis/eworks-1.0.0-fat-raml.zip',
    'apis/ex-16-feb-m3-new-1.0.0-fat-raml.zip',
    'apis/exceptionhandler-1.0.1-fat-raml.zip',
    'apis/exp-pathworks-api-v1-1.0.0-fat-raml.zip',
    'apis/expense-type-1.0.0-fat-raml.zip',
    'apis/experience-api-1.0.0-fat-raml.zip',
    'apis/experience-reference-data-0.1.0-fat-raml.zip',
    'apis/expertise-type-1.0.0-fat-raml.zip',
    'apis/express-api-1.0.0-fat-raml.zip',
    'apis/externalaestutorial-1.0.0-fat-raml.zip',
    'apis/faemployeraccessserviceproxy-1.0.5-fat-raml.zip',
    'apis/faemployerserviceproxy-1.0.9-fat-raml.zip',
    'apis/faexrussell-1.0.6-fat-raml.zip',
    'apis/faprrussell-1.0.5-fat-raml.zip',
    'apis/fastenal-orders-api-1.0.3-fat-raml.zip',
    'apis/fhir-patient-1.0.0-fat-raml.zip',
    'apis/fieldportalexpapi-1.0.0-fat-raml.zip',
    'apis/firstapi-1.0.2-fat-raml.zip',
    'apis/flight-1-1.0.0-fat-raml.zip',
    'apis/flight-1.0.0-fat-raml.zip',
    'apis/flight-1.0.1-fat-raml.zip',
    'apis/flight-7-1.0.0-fat-raml.zip',
    'apis/flight-apl-1.0.0-fat-raml.zip',
    'apis/flight0-1.0.0-fat-raml.zip',
    'apis/flights0-1.0.0-fat-raml.zip',
    'apis/flights00-1.0.1-fat-raml.zip',
    'apis/flights000-1.0.0-fat-raml.zip',
    'apis/flights1-1.0.0-fat-raml.zip',
    'apis/flights_000-1.0.0-fat-raml.zip',
    'apis/flights_001-1.0.0-fat-raml.zip',
    'apis/flights_001-1.0.1-fat-raml.zip',
    'apis/flights__01-1.0.0-fat-raml.zip',
    'apis/flights_ws-1.0.0-fat-raml.zip',
    'apis/flightsnewapi-1.0.0-fat-raml.zip',
    'apis/gender-type-1.0.0-fat-raml.zip',
    'apis/ghghggf-1.0.0-fat-raml.zip',
    'apis/github-api-1.0.0-fat-raml.zip',
    'apis/github0-1.0.0-fat-raml.zip',
    'apis/global-services-api-1.0.0-fat-raml.zip',
    'apis/global-services-api1-1.0.0-fat-raml.zip',
    'apis/google-contacts-1.0.0-fat-raml.zip',
    'apis/google-contacts-api-1.0.0-fat-raml.zip',
    'apis/google-contacts-native-api-1.0.0-fat-raml.zip',
    'apis/google-drive-api-1.0.0-fat-raml.zip',
    'apis/gpc-3.0.0-fat-raml.zip',
    'apis/graydon-company-api-v1.0.1-1.0.1-fat-raml.zip',
    'apis/ha-process-vacationpackage-api-1.0.2-fat-raml.zip',
    'apis/hagerty-quote-experience-2.0.3-fat-raml.zip',
    'apis/harvard-api-1.0.0-fat-raml.zip',
    'apis/harvard-long-1.0.0-fat-raml.zip',
    'apis/harvard-short-1.0.0-fat-raml.zip',
    'apis/harward-case-1.0.0-fat-raml.zip',
    'apis/hawaiian-1.0.4-fat-raml.zip',
    'apis/hemanth_flight-1.0.0-fat-raml.zip',
    'apis/hemanth_flights-1.0.0-fat-raml.zip',
    'apis/hive-mdm-exp-api-account-1.0.0-fat-raml.zip',
    'apis/hive-mdm-exp-api-businessdate-1.0.0-fat-raml.zip',
    'apis/hive-mdm-exp-api-commodity-1.0.0-fat-raml.zip',
    'apis/hive-mdm-exp-api-company-1.0.0-fat-raml.zip',
    'apis/hive-mdm-exp-api-location-1.0.0-fat-raml.zip',
    'apis/hive-mdm-exp-api-person-1.0.0-fat-raml.zip',
    'apis/hive-mdm-exp-api-securitycode-1.0.0-fat-raml.zip',
    'apis/hive-mdm-exp-api-strategyorganization-1.0.0-fat-raml.zip',
    'apis/hive-mdm-exp-api-uom-1.0.0-fat-raml.zip',
    'apis/hive-proc-api-kst-ref-values-1.0.0-fat-raml.zip',
    'apis/hive-proc-api-position-1.0.0-fat-raml.zip',
    'apis/hive-proc-api-trade-1.0.0-fat-raml.zip',
    'apis/hwpmt-siebel-system-api-3.0.0-fat-raml.zip',
    'apis/hybris-ordering-api-1.0.1-fat-raml.zip',
    'apis/hyderabad-flighs-api-1.0.0-fat-raml.zip',
    'apis/i-soup-4.0.0-fat-raml.zip',
    'apis/iban-api-1.0.0-fat-raml.zip',
    'apis/incident-management-api-1.0.0-fat-raml.zip',
    'apis/indian-flight-1.0.2-fat-raml.zip',
    'apis/indian-flights-api-1.0.1-fat-raml.zip',
    'apis/ing-iss-api-super-demo-1.0.0-fat-raml.zip',
    'apis/insurance-system-3.0.0-fat-raml.zip',
    'apis/inventory-reservation-service-football-1.0.0-fat-raml.zip',
    'apis/jcu---employee-api-1.0.0-fat-raml.zip',
    'apis/jcu---phone-api-1.0.0-fat-raml.zip',
    'apis/jcu---student-api-1.0.0-fat-raml.zip',
    'apis/jira-1.0.9-fat-raml.zip',
    'apis/job-api-1.0.0-fat-raml.zip',
    'apis/job-class-1.0.1-fat-raml.zip',
    'apis/job-status-manager-1.0.0-fat-raml.zip',
    'apis/jsonapi-raml-sample-1.0.3-fat-raml.zip',
    'apis/kbs-csfdata-api-dev-1.0.0-fat-raml.zip',
    'apis/kbz-fin-exp-3.0.0-fat-raml.zip',
    'apis/kyc-api-v3-1.0.0-fat-raml.zip',
    'apis/language-type-1.0.1-fat-raml.zip',
    'apis/liberty-sys-database-api-1.0.0-fat-raml.zip',
    'apis/license-type-1.0.0-fat-raml.zip',
    'apis/live-chat-process-api-dev-1.0.0-fat-raml.zip',
    'apis/live-chat-process-api-dev-2.0.0-fat-raml.zip',
    'apis/live-chat-process-api-prod-2.0.0-fat-raml.zip',
    'apis/live-chat-process-api-qa-2.0.0-fat-raml.zip',
    'apis/live-chat-process-api-staging-2.0.0-fat-raml.zip',
    'apis/magento-api-1.0.1-fat-raml.zip',
    'apis/mahesh_uber_api-1.0.1-fat-raml.zip',
    'apis/mambo-proc-1.0.0-fat-raml.zip',
    'apis/marketo-api-1.0.1-fat-raml.zip',
    'apis/marketo-api-wo-customobjects-1.0.0-fat-raml.zip',
    'apis/marketoo_apii-1.0.0-fat-raml.zip',
    'apis/mcs-1.0.0-fat-raml.zip',
    'apis/mdec-core-services-management-1.0.3-fat-raml.zip',
    'apis/mdm-proc-api-businessassociate-1.0.0-fat-raml.zip',
    'apis/mdm-proc-api-company-1.0.0-fat-raml.zip',
    'apis/mdm-proc-api-index-1.0.0-fat-raml.zip',
    'apis/mdm-proc-api-location-1.0.0-fat-raml.zip',
    'apis/mdm-proc-api-securitycode-1.0.0-fat-raml.zip',
    'apis/mdm-proc-api-strategyorganization-1.0.0-fat-raml.zip',
    'apis/mdm-proc-api-uom-1.0.0-fat-raml.zip',
    'apis/mdm-sys-api-businessassociate-1.0.0-fat-raml.zip',
    'apis/mdm-sys-api-strategyorganization-1.0.0-fat-raml.zip',
    'apis/mdssystemapi-1.0.0-fat-raml.zip',
    'apis/medical-report-process-api-2.0.0-fat-raml.zip',
    'apis/mime-type-1.0.0-fat-raml.zip',
    'apis/ml-order-xapi-1.0.7-fat-raml.zip',
    'apis/mobproc-4.0.0-fat-raml.zip',
    'apis/mobproc-cmd-3.0.0-fat-raml.zip',
    'apis/mqpxmiraqlecrm-1.0.3-fat-raml.zip',
    'apis/mua_flights-1.0.0-fat-raml.zip',
    'apis/mule-first-1.0.0-fat-raml.zip',
    'apis/my-api-1.0.0-fat-raml.zip',
    'apis/myconnect-1.0.0-fat-raml.zip',
    'apis/myconnect-sit-1.0.0-fat-raml.zip',
    'apis/myconnect-uat-1.0.0-fat-raml.zip',
    'apis/myflights-1.0.0-fat-raml.zip',
    'apis/navision-api-1.0.0-fat-raml.zip',
    'apis/netsuitefls-baan-1.0.0-fat-raml.zip',
    'apis/neverfail-system-api-1.0.1-fat-raml.zip',
    'apis/northwellonfhir-1.0.0-fat-raml.zip',
    'apis/notification-1.0.0-fat-raml.zip',
    'apis/nwisman-omni-channel-experience-api-1.0.0-fat-raml.zip',
    'apis/oauth2-1.0.1-fat-raml.zip',
    'apis/objectstore-1.0.0-fat-raml.zip',
    'apis/omni-channel-api-1.0.0-fat-raml.zip',
    'apis/omni-channel-experience-api-1.0.0-fat-raml.zip',
    'apis/omni-channel-experience-api-myao-1.0.1-fat-raml.zip',
    'apis/omnichannel_api-1.0.4-fat-raml.zip',
    'apis/onesignal-s-api-1.0.2-fat-raml.zip',
    'apis/openbook-api-4.0.0-fat-raml.zip',
    'apis/order-database-api-1.0.0-fat-raml.zip',
    'apis/order-entry-with-client-sdk-1.0.0-fat-raml.zip',
    'apis/order-mobile-api-1.0.0-fat-raml.zip',
    'apis/ot-esb-reporting-1.0.0-fat-raml.zip',
    'apis/ota2raml-juan-1.0.0-fat-raml.zip',
    'apis/p-people-1.0.0-fat-raml.zip',
    'apis/pa-cmb-profile-1.0.0-fat-raml.zip',
    'apis/pa-cmb-profile-2.0.0-fat-raml.zip',
    'apis/patient-fhir-1.0.0-fat-raml.zip',
    'apis/pay-type-1.0.0-fat-raml.zip',
    'apis/peoplesoftsystemapi-1.0.1-fat-raml.zip',
    'apis/person-2.0.5-fat-raml.zip',
    'apis/personality-api-1.0.0-fat-raml.zip',
    'apis/phone-type-1.0.0-fat-raml.zip',
    'apis/planday-third-party-1.0.9-fat-raml.zip',
    'apis/plm-provider-search-api---dev-1.0.0-fat-raml.zip',
    'apis/po-1.0.0-fat-raml.zip',
    'apis/poc-proxied-api-1.0.0-fat-raml.zip',
    'apis/policy-experience-api-2.0.9-fat-raml.zip',
    'apis/policy-inspro-system-api-2.0.0-fat-raml.zip',
    'apis/portal-api-1.0.0-fat-raml.zip',
    'apis/portfolios-1.0.5-fat-raml.zip',
    'apis/portfolios-2.0.0-fat-raml.zip',
    'apis/postmanprj520-1.0.3-fat-raml.zip',
    'apis/prasad-flights-api-1.0.0-fat-raml.zip',
    'apis/preferred-contact-type-1.0.0-fat-raml.zip',
    'apis/price-1.0.0-fat-raml.zip',
    'apis/primus-cat-1-1.0.0-fat-raml.zip',
    'apis/process-cust-api-1.0.0-fat-raml.zip',
    'apis/process-customers-api-2.0.0-fat-raml.zip',
    'apis/processapi-1.0.0-fat-raml.zip',
    'apis/products-1.0.0-fat-raml.zip',
    'apis/products-system-api-2.0.3-fat-raml.zip',
    'apis/profile-api-1-2.1.9-fat-raml.zip',
    'apis/provider-search-api---dev-1.0.0-fat-raml.zip',
    'apis/provider-system-api-1.0.0-fat-raml.zip',
    'apis/public-api-4.0.0-fat-raml.zip',
    'apis/public-api-localhost-1.0.0-fat-raml.zip',
    'apis/purchase-api-1.0.0-fat-raml.zip',
    'apis/querypricesandyields-1.0.0-fat-raml.zip',
    'apis/questionnaire-type-1.0.0-fat-raml.zip',
    'apis/quote-batch-processing-ms-1.0.4-fat-raml.zip',
    'apis/quote-processing-api-spec-1.0.0-fat-raml.zip',
    'apis/rajflights-1.0.0-fat-raml.zip',
    'apis/raml-1.0.0-fat-raml.zip',
    'apis/raml_console_render_issue-1.0.0-fat-raml.zip',
    'apis/rate-api-new-1.0.0-fat-raml.zip',
    'apis/rate-api-vimal-3.0.0-fat-raml.zip',
    'apis/redissystemapi-1.0.0-fat-raml.zip',
    'apis/redissystemapi-uat-1.0.0-fat-raml.zip',
    'apis/redprairie-deleteme-1.0.0-fat-raml.zip',
    'apis/register-device-1.0.0-fat-raml.zip',
    'apis/registration-api-1.0.0-fat-raml.zip',
    'apis/registration-process-api-1.0.0-fat-raml.zip',
    'apis/registration-user-api-4.0.1-fat-raml.zip',
    'apis/remote-runtimes-manager-0.0.1-fat-raml.zip',
    'apis/restproj-1.0.0-fat-raml.zip',
    'apis/retail-omnichannel-experience-api-2.0.0-fat-raml.zip',
    'apis/retail-omnichannel-experience-api2-1.0.0-fat-raml.zip',
    'apis/rm-1.0.0-fat-raml.zip',
    'apis/rmexampleapi-1.0.0-fat-raml.zip',
    'apis/s-soup-5.0.3-fat-raml.zip',
    'apis/s-suez-routeman-ic-api-1.0.6-fat-raml.zip',
    'apis/s-suez-routeman-shredding-api-1.0.4-fat-raml.zip',
    'apis/s-suez-salesforce-api-1.0.0-fat-raml.zip',
    'apis/sabre-api-proxy-1.0.0-fat-raml.zip',
    'apis/salesforce-crm-api---qa-1.0.0-fat-raml.zip',
    'apis/salesforce-outbound-adapter-1.0.1-fat-raml.zip',
    'apis/sample-1.0.1-fat-raml.zip',
    'apis/sample_flights-1.0.1-fat-raml.zip',
    'apis/sampleapi-1.0.0-fat-raml.zip',
    'apis/sampleapiforamatil-1.0.0-fat-raml.zip',
    'apis/sampleimportapi-1.0.0-fat-raml.zip',
    'apis/samv-api-1.0.3-fat-raml.zip',
    'apis/sandbox-2.0.0-fat-raml.zip',
    'apis/sap-hybris-order-api-1.0.1-fat-raml.zip',
    'apis/sapi-benchmarkinfo-1.0.0-fat-raml.zip',
    'apis/sapi-clients-1.0.0-fat-raml.zip',
    'apis/sapi-commercial-partners-v1-1.0.0-fat-raml.zip',
    'apis/sapi-customer-db-1.0.0-fat-raml.zip',
    'apis/sapi-facebook-1.0.0-fat-raml 2.zip',
    'apis/sapi-facebook-1.0.0-fat-raml.zip',
    'apis/sapi-facebook-1.0.1-fat-raml 2.zip',
    'apis/sapi-facebook-1.0.1-fat-raml.zip',
    'apis/sapi-facebook-1.0.2-fat-raml.zip',
    'apis/sapi-facebook-1.0.3-fat-raml.zip',
    'apis/sapi-facebook-1.0.4-fat-raml.zip',
    'apis/sapi-facebook-1.0.6-fat-raml.zip',
    'apis/sapi-marketinfo-1.0.0-fat-raml.zip',
    'apis/sapi-operacache-conception-v1-1.0.0-fat-raml.zip',
    'apis/sapi-portfolio-1.0.0-fat-raml.zip',
    'apis/sapi-ref20-v11-1.0.0-fat-raml.zip',
    'apis/sappan-omni-channel-experience-api-1.0.0-fat-raml.zip',
    'apis/saturn-integration-api-1.0.0-fat-raml.zip',
    'apis/school-type-1.0.0-fat-raml.zip',
    'apis/searchapi-1.0.5-fat-raml.zip',
    'apis/secureapidemo-1.0.0-fat-raml.zip',
    'apis/servicecloud-loyaltn-cn-2.0.1-fat-raml.zip',
    'apis/shaklee-itrack-system-api-1.0.0-fat-raml.zip',
    'apis/shaklee-itrack-system-api-2.0.3-fat-raml.zip',
    'apis/shaklee-lead-api-1.0.6-fat-raml.zip',
    'apis/shiav_first_v01-1.0.1-fat-raml.zip',
    'apis/shiftboard-web-services-third-party-3.0.0-fat-raml.zip',
    'apis/shipping-1.0.0-fat-raml.zip',
    'apis/silhub-public-api-1.0.0-fat-raml.zip',
    'apis/siva-flights-api-1.0.0-fat-raml.zip',
    'apis/sivatester-1.0.0-fat-raml.zip',
    'apis/smallworldsystemapi-1.0.0-fat-raml.zip',
    'apis/snagsystemapi-1.0.0-fat-raml.zip',
    'apis/social-network-api-1.0.0-fat-raml.zip',
    'apis/social-network-api-for-facebook-1.0.0-fat-raml.zip',
    'apis/social-network-api-for-facebook-1.0.1-fat-raml.zip',
    'apis/social-network-api-for-facebook-1.0.4-fat-raml.zip',
    'apis/social-network-api-for-facebook-1.0.5-fat-raml.zip',
    'apis/sprint-digital-api-1.0.0-fat-raml.zip',
    'apis/sri-omni-channel-experience-api-1.0.0-fat-raml.zip',
    'apis/srprdividends-5.0.0-fat-raml.zip',
    'apis/srpremail-2.0.0-fat-raml.zip',
    'apis/ssingavara_first_flight-1.0.1-fat-raml.zip',
    'apis/ssn-validate-api-1.0.0-fat-raml.zip',
    'apis/staples-web-client-api-1.0.0-fat-raml.zip',
    'apis/sudheer-1.0.0-fat-raml.zip',
    'apis/sumardi-omni-channel-experience-api-1.0.0-fat-raml.zip',
    'apis/suvidha-1.0.0-fat-raml.zip',
    'apis/sys-apex-3.0.1-fat-raml.zip',
    'apis/system-azure-api-1.0.2-fat-raml.zip',
    'apis/system-salesforce-1.0.0-fat-raml.zip',
    'apis/tax-type-1.0.0-fat-raml.zip',
    'apis/time-sheet-configuration-1.0.0-fat-raml.zip',
    'apis/timesheet-invoice-process-status-type-1.0.0-fat-raml.zip',
    'apis/titleservices-dev-1.0.0-fat-raml.zip',
    'apis/titleservices-qa-1.0.0-fat-raml.zip',
    'apis/tmf-product-ordering-1.0.0-fat-raml.zip',
    'apis/tmf-resource-function-activation-conf-1.0.0-fat-raml.zip',
    'apis/tmf-shopping-cart-1.0.0-fat-raml.zip',
    'apis/tmf-usage-consumption-1.0.0-fat-raml.zip',
    'apis/totalsafe-1.0.0-fat-raml.zip',
    'apis/training-type-1.0.0-fat-raml.zip',
    'apis/travel-type-1.0.0-fat-raml.zip',
    'apis/twitter-1.0.0-fat-raml.zip',
    'apis/unitflow-lookup-api-1.0.0-fat-raml.zip',
    'apis/usage-1.0.0-fat-raml.zip',
    'apis/vdabpocpersonsapi-1.0.0-fat-raml.zip',
    'apis/vegetationprocessapi-1.0.0-fat-raml.zip',
    'apis/vimssystemapi-1.0.0-fat-raml.zip',
    'apis/visualizer-v2-api-1.0.0-fat-raml.zip',
    'apis/vuconnectapi-1.0.0-fat-raml.zip',
    'apis/waspsystemapi-1.0.0-fat-raml.zip',
    'apis/wealth-fps-asset-allocations-api-1.0.0-fat-raml.zip',
    'apis/wealth-fps-financial-model-portfolios-api-1.0.0-fat-raml.zip',
    'apis/wealth-fps-product-prices-api-1.0.0-fat-raml.zip',
    'apis/wealth-robo-advisor-api-1.0.0-fat-raml.zip',
    'apis/web-client-api-1.0.0-fat-raml.zip',
    'apis/webshop-order-entry-1.0.0-fat-raml.zip',
    'apis/wmt-mfs-1.0.6-fat-raml.zip',
    'apis/wmt-mfs-agent-exp-1.0.0-fat-raml.zip',
    'apis/wmt-mfs-customer-exp-1.0.0-fat-raml.zip',
    'apis/wmt-mfs-exp-1.0.0-fat-raml.zip',
    'apis/ws-workshop-api-1.0.0-fat-raml.zip',
    'apis/wsact-commercial-system-api-1.0.2-fat-raml.zip',
    'apis/wsact-personal-system-api-1.0.1-fat-raml.zip',
    'apis/wsfbh-sys-api-1.0.2-fat-raml.zip',
    'apis/wsflx-sys-api-1.0.0-fat-raml.zip',
    'apis/wspfo-sys-api-1.0.0-fat-raml.zip',
    'apis/wstrl-system-api-1.0.3-fat-raml.zip',
    'apis/x-suez-experience-api-2.0.3-fat-raml.zip',
    'apis/x-suez-experience-api-prod-1.0.0-fat-raml.zip',
    'apis/xbrl_connector-1.0.0-fat-raml.zip',
    'apis/zendesk-1.0.0-fat-raml.zip',
    'apis/zuora-1.0.0-fat-raml.zip',
    'apis/zuora-raml-1.0.0-fat-raml.zip'
  ];

  scope._apiSelectionHandler = function(e) {
    const api = scope.apis[e.target.selected];
    const url = new URL(api, location.href).toString();
    scope._informApi(url);
  };

  scope._informApi = function(src) {
    const nodes = document.querySelectorAll('iframe');
    for (let i = 0, len = nodes.length; i < len; i++) {
      nodes[i].contentWindow.postMessage({
        cmd: 'load-api',
        src
      }, '*');
    }
  };
})(document.getElementById('app'));