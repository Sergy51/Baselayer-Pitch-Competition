# Baselayer — Business Verification Data Dictionary

*March 2026*

---

## Data Submission Requirements

The following details for each business will be submitted by the user who aims to verify a business through Baselayer.

| Field Name | Field Description | Required | Data Type |
|---|---|---|---|
| `legal_entity_name` | Legal Entity Name | Required | string |
| `legal_entity_address` | Address | Required | string |
| `tin` | Tax ID | Optional; Required to conduct TIN-Name Match | string |
| `officer_names` | Applicant Name | Optional; Required for Beneficial Owner Matching | array |
| `phone_number` | Phone Number | Optional | string |
| `website` | Website | Optional; Highly Recommended for Website Analysis and Industry Classification | string |
| `email` | Email | Optional | string |

---

## Search Information

General information about the search, and how closely it matched the information in Baselayer records. This information is replicated across all the rows related to a specific search in the data test.

| Field Name | Field Description | Baselayer Context | Data Type |
|---|---|---|---|
| `search_id` | Unique identifier for the submitted search | UUID | string |
| `business_id` | Unique identifier for the business retrieved. Could be null if Baselayer is not able to find a related SoS registration | UUID | string |
| `tin_matched` | Indicates whether the inputted TIN/EIN was a match with the business name, per the IRS | - | boolean |
| `kyb_score` | The score represents Baselayer's assessment of the quality of the business search, mainly how closely the inputs of the search match the information in Baselayer records | 0–100 | number |
| `kyb_rating` | The rating associated with the KYB score | A, B, C, F | string |
| `verified` | Indicates whether the found business was a close enough match to be considered verified | - | boolean |
| `business_name_match` | Indicates how close the inputted name matches the found business entity | NO_MATCH, SIMILAR, EXACT | string |
| `business_address_match` | Indicates how close the inputted address matches the found business entity | NO_MATCH, SIMILAR, EXACT, CITY, STATE | string |
| `business_officer_match` | Indicates how close the inputted officer name matches the found business officers | NO_MATCH, SIMILAR, EXACT | string |
| `registered_agent_match` | Indicates how close the inputted officer name matches the found business registered agent | NO_MATCH, SIMILAR, EXACT | string |

---

## Business Information

General information about the business, based on the domestic or primary registration. This information is replicated across all the rows related to a specific business in the data test.

| Field Name | Field Description | Baselayer Context | Data Type |
|---|---|---|---|
| `business_response_name` | The name of the business, determined by the name found on the domestic registration | - | string |
| `alternative_names` | A list of alternative names (e.g. DBAs) found associated with the business entity | - | array of strings |
| `business_response_structure` | Structure of the business | LLC, LLP, C_CORPORATION… | string |
| `business_response_incorporation_state` | State 2-letter abbreviation in which the business first incorporated | - | 2-digit code |
| `business_response_incorporation_date` | The date when the business first incorporated | - | date |
| `business_response_months_in_business` | The number of months elapsed since the first incorporation date | - | integer |

---

## Registration Information

Details specific to a particular registration of a business in a state. Information is unique per row in the data test.

| Field Name | Field Description | Baselayer Context | Data Type |
|---|---|---|---|
| `name` | The name of the business found on the specific registration | - | string |
| `issue_date` | The date the registration was issued | - | date |
| `dissolution_date` | The date the registration was dissolved in the given state | - | date |
| `file_number` | The file number of the registration | - | string |
| `state` | State 2-letter abbreviation in which the registration was filed | - | 2-digit code |
| `registration_type` | Whether the registration is domestic or foreign | foreign, domestic, unknown | string |
| `status` | Status field indicating whether the corporate registration filing is active or inactive | active, inactive, unknown | string |
| `standing` | The detailed standing of the registration | - | string |
| `officers` | The Officers listed on the registration | Format: `'name': [], 'titles': []` | array of objects |

---

## Address Information

Through the API, information for each address is accessible. In data tests, usually only the primary address of the company is returned.

| Field Name | Field Description | Baselayer Context | Data Type |
|---|---|---|---|
| `address_id` | UUID for the address | UUID | string |
| `address_street` | Street name of the address | - | string |
| `address_city` | City name of the address | - | string |
| `address_state` | State 2-letter abbreviation of the address | - | string |
| `address_zip` | Zip code of the address | - | string |
| `address_latitude` | Latitude of the address | - | number |
| `address_longitude` | Longitude of the address | - | number |
| `address_rdi` | Residential Delivery Indicator of the address | Residential, Commercial | string |
| `address_deliverable` | Indicates whether the address is deliverable | - | boolean |
| `address_cmra` | Indicates whether the address is a Commercial Mail Receiving Agency (CMRA) | - | boolean |
| `address_url` | URL specific to the address to access all information through the Baselayer API | URL | string |

---

## Registered Agent Information

| Field Name | Field Description | Baselayer Context | Data Type |
|---|---|---|---|
| `registered_agent_name` | Name of the registered agent | - | string |
| `registered_agent_address_id` | UUID for the address of the registered agent | UUID | string |
| `registered_agent_address_street` | Street name of the address of the registered agent | - | string |
| `registered_agent_address_city` | City name of the address of the registered agent | - | string |
| `registered_agent_address_state` | State 2-letter abbreviation of the address of the registered agent | - | string |
| `registered_agent_address_zip` | Zip code of the address of the registered agent | - | string |
| `registered_agent_address_latitude` | Latitude of the address of the registered agent | - | number |
| `registered_agent_address_longitude` | Longitude of the address of the registered agent | - | number |
| `registered_agent_address_rdi` | Residential Delivery Indicator of the address of the registered agent | Residential, Commercial | string |
| `registered_agent_address_deliverable` | Indicates whether the address is deliverable of the registered agent | - | boolean |
| `registered_agent_address_cmra` | Indicates whether the address is a CMRA of the registered agent | - | boolean |

---

## Watchlists and Sanctions

The response for each watchlist and sanctions list object comes in the following schema:

- **Code**: e.g. OFAC
- **Name**: e.g. Department of Treasury, Office of Foreign Assets Control
- **Count**: e.g. 0
- **Details**: e.g. `[]`

| Field Name | Field Description |
|---|---|
| `watchlist_OFAC` | Department of Treasury, Office of Foreign Assets Control |
| `watchlist_IEO` | IRS Exempt Organizations List |
| `watchlist_FBI` | FBI Wanted List |
| `watchlist_CNS` | Consolidated Canadian Autonomous Sanctions List |
| `watchlist_CSL` | Department of Commerce, Consolidated Screening List |

---

## Industry Prediction

| Field Name | Field Description | Format | Data Type |
|---|---|---|---|
| `naics_code` | The predicted North American Industry Classification System (NAICS) code for the business | 6-digit NAICS code | string |
| `naics_description` | The title of the predicted NAICS code | - | string |
| `naics_accuracy` | The accuracy of the NAICS code prediction | 0–1 | number |
| `naics_risk_level` | The risk level of the business | high, medium, low | string |
| `mcc_codes_code` | Merchant Category Code (MCC) associated with the NAICS | 4-digit MCC code | string |
| `mcc_codes_description` | The title of the predicted MCC code | - | string |
| `mastercard_risk` | Indicates if there is a risk associated with Mastercard transactions | - | boolean |
| `visa_risk_tier` | The Visa risk tier associated with this MCC | 1, 2, 3 | integer |
| `sic_codes_code` | Standard Industrial Classification (SIC) code associated with the NAICS | 4-digit SIC code | string |
| `sic_codes_description` | The title of the predicted SIC code | - | string |
| `keywords` | List of keywords associated with the business that could indicate the area of business activity | - | array of strings |

---

## Website Analysis

If a website was provided as part of the submission, the website analysis will be related to that specific website. If no website was provided, the analysis will be related to the website that Baselayer found if available. Every address found on the website is accessible via the API.

| Field Name | Field Description | Baselayer Context | Data Type |
|---|---|---|---|
| `website_analysis_request_id` | Unique ID of the website analysis request | UUID | string |
| `business_address_match` | Indicates whether the inputted address was identified on the found website | NO_MATCH, SIMILAR, EXACT, CITY, STATE | string |
| `business_website_match` | Indicates whether the inputted website matches the found business website | - | boolean |
| `phone_number_match` | How closely the inputted phone number matches phone numbers found during discovery | EXACT, NO_MATCH, AREA_CODE | enum |
| `phone_number_match_sources` | The sources where the best phone number match was found | - | array of strings |
| `email_match` | How closely the inputted email matches emails found during discovery | EXACT, NO_MATCH, DOMAIN | enum |
| `email_match_sources` | The sources where the best email match was found | - | array of strings |
| `is_parked` | Indicates if the website is suspected of being a parked domain | - | boolean |
| `email_deliverable` | Indicates if the website is able to send and receive emails | - | boolean |
| `website_build_status` | Indicates the current operational state of the website | active, inactive, coming soon | enum |
| `website_depth` | Maximum depth reached | '0' (homepage only), '1' (one level), '2+' (structured site) | string |
| `website_breadth` | Total unique pages discovered | Actual count or '15+' for substantial sites | string |
| `socials` | The list of social media profiles identified on the analyzed website | - | array of strings |
| `emails` | The list of email addresses identified on the analyzed website | - | array of strings |
| `phone_numbers` | The list of phone numbers identified on the analyzed website | - | array of strings |
| `domain_created_at` | The date and time when the domain was first registered | - | date-time |
| `domain_age_months` | The age of the domain since its creation in months | - | integer |
| `domain_registrar` | The name of the domain registrar | - | string |
| `ssl_is_valid` | SSL certificate validity information for the analyzed website | - | boolean |

### Web Addresses (indexed: `_0`, `_1`, …)

| Field Name Pattern | Field Description | Data Type |
|---|---|---|
| `web_address_id_{n}` | Unique identifier for the mailing address identified on the website | string (UUID) |
| `web_address_street_{n}` | Street name | string |
| `web_address_city_{n}` | City name | string |
| `web_address_state_{n}` | State 2-letter abbreviation | string |
| `web_address_zip_{n}` | Zip code | string |
| `web_address_latitude_{n}` | Latitude | number |
| `web_address_longitude_{n}` | Longitude | number |
| `web_address_rdi_{n}` | Residential Delivery Indicator | string (Residential, Commercial) |
| `web_address_deliverable_{n}` | Whether the address is deliverable | boolean |
| `web_address_cmra_{n}` | Whether the address is a CMRA | boolean |

---

## Social Media

Enhanced Search option needs to be requested for social media to be retrieved. Baselayer retrieves basic information and unique platform metadata for LinkedIn, Instagram, Facebook, YouTube, X, TikTok, and Pinterest.

| Field Name Pattern | Field Description | Baselayer Context | Data Type |
|---|---|---|---|
| `{site}.username` | The handle/username for the account | - | string |
| `{site}.url` | Full URL to the business's profile | - | string |
| `{site}.confidence` | How confident Baselayer is that this account belongs to the searched business (based on account name, location, and/or contact details) | high, medium, low | enum |
| `{site}.metadata` | Additional site-specific data which may include follower count, verification status, post count, or contact details. Structure varies per site | - | object |

---

## Customer Reviews

Enhanced Search option needs to be requested for reviews to be retrieved. Baselayer retrieves information from Yelp, Google, TrustPilot, and TripAdvisor.

| Field Name Pattern | Field Description | Baselayer Context | Data Type |
|---|---|---|---|
| `{site}.url` | Full URL to the business's profile or listing on the review site | - | string |
| `{site}.confidence` | How confident Baselayer is that this profile/listing belongs to the searched business | high, medium, low | enum |
| `{site}.rating` | Average customer rating (null if no reviews exist) | 0–5 | float |
| `{site}.volume` | Total number of customer reviews received on the site | - | integer |
| `{site}.summary` | AI-generated summary of the reviews highlighting common themes, sentiment, and frequently mentioned aspects | - | string |
| `{site}.phone_number` | Business phone number as listed on the review site | - | string |
| `{site}.address` | Business address as listed on the review site | - | string |
| `{site}.business_website` | Business website URL as listed on the review site | - | string |

---

## Lien Search

During data tests, one row is returned for each lien found. A single company could appear in multiple rows if they have multiple liens. For every lien, all identifiable parties are returned.

| Field Name | Field Description | Baselayer Context | Data Type |
|---|---|---|---|
| `liens_search_request_id` | The unique identifier of the liens search request | UUID | string |
| `id` | The identifier of this lien filing record | UUID | string |
| `state` | The current state of the liens search request | PENDING, EXECUTING, COMPLETED, FAILED, CANCELED | string |
| `filing_number` | Sequential identifier assigned by the filing office | - | string |
| `filing_type` | Describes the nature of the filing | - | string |
| `filing_date` | Official date when the lien was recorded | - | date |
| `lapse_date` | The expiry date for the lien's claim on collateral | - | date |
| `status` | Reflects the current legal status of the lien | - | string |
| `number_of_pages` | Reflects the volume of documentation for the lien filing | - | integer |
| `document_filename` | When present, indicates a document is available for download via API or Baselayer platform | - | string |
| `amendments` | A chronological list of amendments (continuations, terminations, modifications) | Format: `'filing_number': [], 'filing_type': [], 'filing_date': [], 'number_of_pages': []` | object |
| `collateral_statements` | A sequence of collateral statements enumerating the specific assets secured by the lien | - | string |

### Lien Parties (indexed: `party_id0`, `party_id1`, …)

| Field Name Pattern | Field Description | Baselayer Context | Data Type |
|---|---|---|---|
| `party_id{n}` | The unique identifier of this party | UUID | string |
| `party_type{n}` | Categorizes the party as debtor, secured party, or record owner | Debtor, Secured Party, Record Owner | string |
| `party_name{n}` | Legal name of the party | - | string |
| `party_address{n}` | Address of the party for legal notices or contact purposes | - | object |

---

## Litigation and Bankruptcy Search

During data tests, one row is returned for each litigation or bankruptcy record found. A single company could appear in multiple rows. Available data varies significantly depending on the court and case type.

| Field Name | Field Description | Baselayer Context | Data Type |
|---|---|---|---|
| `docket_search_request_id` | The unique identifier of this docket search request | UUID | string |
| `id` | The unique identifier of this docket | UUID | string |
| `docket_number` | Unique identifier for the docket in the given court system | - | string |
| `court` | Court in which the docket was filed | - | string |
| `division` | Court division assigned to the docket | - | string |
| `judges` | List of judges assigned to the docket | - | array of strings |
| `title` | Title of the docket | - | string |
| `case_type` | Type of case | - | string |
| `status` | Raw status of the case as provided by the court record | - | string |
| `is_bankruptcy` | Indicates whether the case is a bankruptcy proceeding | - | boolean |
| `date_filed` | Date the case was filed | - | date |
| `match_level` | How closely the legal name of the business matches the party mentioned in the record | EXACT, SIMILAR | enum |
| `normalized_status` | Standardized status indicating whether the record is open or closed (conservative mapping — marked closed only when closure is certain) | open, closed | enum |
