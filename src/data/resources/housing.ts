/* ─── Housing & Stability Resource Data ─── */

export interface Resource {
  /** Organization or program name */
  name: string;
  /** Geographic reach */
  coverage: string;
  /** Categories of service provided */
  serviceTypes: string[];
  /** Who qualifies (plain-language summary) */
  eligibility: string;
  /** How to start the process */
  intake: string;
  /** Primary website (no tracking params) */
  website: string;
  /** Primary phone number */
  phone: string;
}

export interface ResourceGroup {
  /** Group heading shown in the UI */
  title: string;
  /** Resources within this geographic / thematic group */
  items: Resource[];
}

export const HOUSING_GROUPS: ResourceGroup[] = [
  /* ────────────────────────────────────────────
   * 1 · North Texas – DFW
   * ──────────────────────────────────────────── */
  {
    title: "North Texas – DFW",
    items: [
      {
        name: "Veterans Center of North Texas (VCNT)",
        coverage: "Dallas–Fort Worth metroplex",
        serviceTypes: ["Transitional housing", "Case management", "Life skills"],
        eligibility: "Male veterans experiencing homelessness; must be clean and sober",
        intake: "Call intake line or walk in during business hours",
        website: "https://www.veteranscenterofnorthtexas.org",
        phone: "214-600-2966",
      },
      {
        name: "Nexus Recovery Center — Veterans Track",
        coverage: "Dallas County",
        serviceTypes: ["Substance use treatment", "Supportive housing", "Mental health"],
        eligibility: "Women veterans with substance use disorders",
        intake: "Call admissions or referral through VA",
        website: "https://www.nexusrecovery.org",
        phone: "214-321-0156",
      },
      {
        name: "Dallas VA Medical Center — Homeless Programs",
        coverage: "Dallas and surrounding counties",
        serviceTypes: ["HUD-VASH", "GPD referrals", "Health care for homeless veterans"],
        eligibility: "Homeless veterans eligible for VA health care",
        intake: "Contact social work service at Dallas VAMC",
        website: "https://www.va.gov/north-texas-health-care/",
        phone: "214-742-8387",
      },
      {
        name: "Metro Dallas Homeless Alliance (MDHA)",
        coverage: "Dallas and Collin counties",
        serviceTypes: ["Coordinated entry", "Homeless response planning", "Data analysis"],
        eligibility: "All individuals experiencing homelessness; veterans prioritized",
        intake: "Call The Bridge intake or 211 for coordinated entry",
        website: "https://www.mdhadallas.org",
        phone: "214-670-1100",
      },
      {
        name: "The Bridge Homeless Recovery Center — Dallas",
        coverage: "Dallas County",
        serviceTypes: ["Emergency shelter", "Day services", "Employment readiness"],
        eligibility: "Adults experiencing homelessness; veteran-specific services available",
        intake: "Walk-in intake at The Bridge or referral through MDHA",
        website: "https://www.bridgenorthtexas.org",
        phone: "214-670-1100",
      },
      {
        name: "Housing Forward (formerly MHMR Housing)",
        coverage: "Dallas County",
        serviceTypes: ["Permanent supportive housing", "Rapid re-housing", "Rental assistance"],
        eligibility: "Individuals and families experiencing homelessness including veterans",
        intake: "Referral through coordinated entry system",
        website: "https://www.housingforward.org",
        phone: "214-678-0826",
      },
      {
        name: "Salvation Army — DFW Veterans Services",
        coverage: "Dallas–Fort Worth metroplex",
        serviceTypes: ["Emergency shelter", "Transitional housing", "Case management"],
        eligibility: "Veterans and families in crisis; income guidelines apply",
        intake: "Call local Salvation Army center or visit intake office",
        website: "https://www.salvationarmyntx.org",
        phone: "214-637-8100",
      },
      {
        name: "Volunteers of America Texas — DFW",
        coverage: "Dallas–Fort Worth metroplex",
        serviceTypes: ["Permanent housing", "GPD transitional housing", "Employment services"],
        eligibility: "Homeless veterans; priority for chronically homeless",
        intake: "Referral through VA or direct contact with VOA Texas",
        website: "https://www.voatx.org",
        phone: "214-468-9057",
      },
      {
        name: "Family Gateway — Dallas",
        coverage: "Dallas County",
        serviceTypes: ["Family shelter", "Rapid re-housing", "Children's programs"],
        eligibility: "Families with children experiencing homelessness including veteran families",
        intake: "Call intake line or referral through MDHA coordinated entry",
        website: "https://www.familygateway.org",
        phone: "214-823-4500",
      },
      {
        name: "Arlington Life Shelter",
        coverage: "Arlington / Tarrant County",
        serviceTypes: ["Emergency shelter", "Life skills", "Employment assistance"],
        eligibility: "Adults and families experiencing homelessness including veterans",
        intake: "Walk-in or call for availability",
        website: "https://www.arlingtonlifeshelter.org",
        phone: "817-548-9885",
      },
      {
        name: "Community Enrichment Center — Fort Worth",
        coverage: "Fort Worth / Tarrant County",
        serviceTypes: ["Day services", "Mail and phone access", "Case management referrals"],
        eligibility: "Individuals experiencing homelessness; veterans welcome",
        intake: "Walk in during operating hours",
        website: "https://www.communityenrichmentcenter.org",
        phone: "817-332-1639",
      },
      {
        name: "Veteran Resource Centers at Dallas College",
        coverage: "Dallas County — all Dallas College campuses",
        serviceTypes: ["Education benefits", "Peer support", "Housing and food referrals"],
        eligibility: "Student veterans and dependents enrolled at Dallas College",
        intake: "Visit any campus Veteran Resource Center or call",
        website: "https://www.dallascollege.edu/about/veterans/pages/default.aspx",
        phone: "972-860-4600",
      },
    ],
  },

  /* ────────────────────────────────────────────
   * 2 · Texas
   * ──────────────────────────────────────────── */
  {
    title: "Texas",
    items: [
      {
        name: "Texas Veterans Commission — Housing Programs",
        coverage: "Statewide — Texas",
        serviceTypes: ["Housing assistance", "Claims & benefits", "Employment services"],
        eligibility: "Texas veterans and their families",
        intake: "Contact local TVC office or call statewide hotline",
        website: "https://www.tvc.texas.gov",
        phone: "512-463-6564",
      },
      {
        name: "Texas Department of Housing and Community Affairs (TDHCA)",
        coverage: "Statewide — Texas",
        serviceTypes: ["Rental assistance", "Homebuyer programs", "Weatherization"],
        eligibility: "Low-income households including veterans; income limits vary by program",
        intake: "Apply through TDHCA portal or local subrecipient",
        website: "https://www.tdhca.texas.gov",
        phone: "800-525-0657",
      },
      {
        name: "Texas Veterans Land Board (VLB)",
        coverage: "Statewide — Texas",
        serviceTypes: ["Home loans", "Land loans", "Home improvement loans"],
        eligibility: "Texas veterans with honorable service; active-duty eligible",
        intake: "Apply online through the VLB portal",
        website: "https://vlb.texas.gov",
        phone: "800-252-8387",
      },
      {
        name: "SSVF — Texas Grantees",
        coverage: "Major metro areas across Texas",
        serviceTypes: ["Rapid re-housing", "Homelessness prevention", "Case management"],
        eligibility: "Very low-income veteran families (≤ 50% AMI)",
        intake: "Find local Texas SSVF grantee via VA SSVF directory",
        website: "https://www.va.gov/homeless/ssvf/",
        phone: "877-424-3838",
      },
      {
        name: "Haven for Hope — San Antonio",
        coverage: "San Antonio metro area",
        serviceTypes: ["Emergency shelter", "Transitional housing", "Comprehensive services"],
        eligibility: "Individuals experiencing homelessness including veterans",
        intake: "Walk-in intake at Prospects Courtyard or call",
        website: "https://www.havenforhope.org",
        phone: "210-220-2100",
      },
      {
        name: "SEARCH Homeless Services — Houston",
        coverage: "Greater Houston area",
        serviceTypes: ["Permanent housing", "Case management", "Healthcare navigation"],
        eligibility: "Individuals experiencing homelessness including veterans",
        intake: "Contact SEARCH outreach team or visit day center",
        website: "https://www.searchhomeless.org",
        phone: "713-739-7177",
      },
      {
        name: "Austin VA Outpatient Clinic — HCHV Program",
        coverage: "Austin and Central Texas",
        serviceTypes: ["Outreach", "Referral to housing", "Clinical assessment"],
        eligibility: "Homeless veterans in the Central Texas catchment area",
        intake: "Contact Austin VA social work or call HCHV coordinator",
        website: "https://www.va.gov/central-texas-health-care/",
        phone: "512-823-4000",
      },
      {
        name: "Family Endeavors — Texas",
        coverage: "San Antonio, Austin, El Paso, and surrounding areas",
        serviceTypes: ["SSVF services", "Rapid re-housing", "Legal aid"],
        eligibility: "Low-income veteran families at risk of homelessness",
        intake: "Call intake line or apply through Family Endeavors website",
        website: "https://www.familyendeavors.org",
        phone: "210-431-6466",
      },
      {
        name: "Ending Community Homelessness Coalition (ECHO) — Austin",
        coverage: "Austin / Travis County",
        serviceTypes: ["Coordinated entry", "Homeless response system", "Data & planning"],
        eligibility: "All individuals experiencing homelessness; veterans prioritized",
        intake: "Call Austin ECHO hotline or visit a coordinated entry access point",
        website: "https://www.austinecho.org",
        phone: "512-305-4100",
      },
      {
        name: "Tarrant County Homeless Coalition",
        coverage: "Fort Worth / Tarrant County",
        serviceTypes: ["Coordinated entry", "Housing navigation", "Community planning"],
        eligibility: "Individuals and families experiencing homelessness including veterans",
        intake: "Call coordinated entry line or visit partner agency",
        website: "https://www.ahomewithhope.org",
        phone: "817-509-3635",
      },
    ],
  },

  /* ────────────────────────────────────────────
   * 3 · National
   * ──────────────────────────────────────────── */
  {
    title: "National",
    items: [
      {
        name: "HUD-VASH (VA Supportive Housing)",
        coverage: "Nationwide — all VA medical centers",
        serviceTypes: ["Housing vouchers", "Case management", "Clinical services"],
        eligibility: "Homeless veterans eligible for VA health care",
        intake: "Referral through local VA homeless program or VAMC social work",
        website: "https://www.va.gov/homeless/hud-vash.asp",
        phone: "877-424-3838",
      },
      {
        name: "SSVF (Supportive Services for Veteran Families)",
        coverage: "Nationwide — community-based grantees in every state",
        serviceTypes: ["Rapid re-housing", "Homelessness prevention", "Financial assistance"],
        eligibility: "Very low-income veteran families (≤ 50% AMI)",
        intake: "Contact local SSVF grantee or call the VA Homeless Hotline",
        website: "https://www.va.gov/homeless/ssvf/",
        phone: "877-424-3838",
      },
      {
        name: "VA Grant and Per Diem (GPD) Program",
        coverage: "Nationwide — community nonprofit partners",
        serviceTypes: ["Transitional housing", "Case management", "Rehabilitation services"],
        eligibility: "Homeless veterans; priority for chronically homeless and women veterans",
        intake: "Referral through VA or direct contact with local GPD provider",
        website: "https://www.va.gov/homeless/gpd.asp",
        phone: "877-424-3838",
      },
      {
        name: "National Coalition for Homeless Veterans (NCHV)",
        coverage: "Nationwide — network of 2,000+ community organizations",
        serviceTypes: ["Housing referrals", "Job training", "Legal assistance"],
        eligibility: "All veterans experiencing or at risk of homelessness",
        intake: "Use the NCHV provider locator or call directly",
        website: "https://nchv.org",
        phone: "800-838-4357",
      },
      {
        name: "Volunteers of America — Veterans Services",
        coverage: "46 states plus D.C.",
        serviceTypes: ["Permanent housing", "Transitional housing", "Employment support"],
        eligibility: "Veterans and veteran families; varies by program",
        intake: "Contact local VOA affiliate or call national office",
        website: "https://www.voa.org/veterans",
        phone: "800-899-0089",
      },
      {
        name: "U.S. Department of Veterans Affairs — Homeless Programs",
        coverage: "Nationwide — all VA medical centers",
        serviceTypes: ["Program coordination", "Benefits enrollment", "Health care access"],
        eligibility: "All veterans experiencing or at risk of homelessness",
        intake: "Walk into any VA medical center or call the Homeless Hotline",
        website: "https://www.va.gov/homeless/",
        phone: "877-424-3838",
      },
      {
        name: "Operation Homefront",
        coverage: "Nationwide — 30+ chapters",
        serviceTypes: ["Transitional housing", "Mortgage assistance", "Financial aid"],
        eligibility: "Post-9/11 service members, veterans, and military families",
        intake: "Apply online or call local chapter",
        website: "https://www.operationhomefront.org",
        phone: "800-722-6098",
      },
      {
        name: "Habitat for Humanity — Veterans Build",
        coverage: "Nationwide — local affiliate network",
        serviceTypes: ["Homeownership", "Critical home repair", "Volunteer build events"],
        eligibility: "Veteran families meeting local Habitat partner criteria",
        intake: "Apply through local Habitat affiliate",
        website: "https://www.habitat.org/volunteer/near-you/veterans-build",
        phone: "800-422-4828",
      },
      {
        name: "National Alliance to End Homelessness",
        coverage: "Nationwide — policy and research",
        serviceTypes: ["Policy advocacy", "Data and research", "Community toolkits"],
        eligibility: "Open resource — no individual eligibility required",
        intake: "Access reports and tools online",
        website: "https://endhomelessness.org/homelessness-in-america/who-experiences-homelessness/veterans/",
        phone: "202-638-1526",
      },
      {
        name: "Veterans Inc.",
        coverage: "Northeast U.S. — expanding nationally",
        serviceTypes: ["Emergency shelter", "Permanent housing", "Workforce development"],
        eligibility: "Veterans experiencing homelessness or at risk; all eras of service",
        intake: "Call intake line or walk in to a Veterans Inc. location",
        website: "https://www.veteransinc.org",
        phone: "800-482-2565",
      },
    ],
  },

  /* ────────────────────────────────────────────
   * 4 · Other High-Impact States
   * ──────────────────────────────────────────── */
  {
    title: "Other High-Impact States",
    items: [
      {
        name: "California — CalVet Home Loans",
        coverage: "Statewide — California",
        serviceTypes: ["Home purchase loans", "Home improvement loans", "Farm and mobile home loans"],
        eligibility: "California veterans with qualifying service",
        intake: "Apply online through CalVet portal",
        website: "https://www.calvet.ca.gov/homeloans",
        phone: "800-952-5626",
      },
      {
        name: "Florida — Florida Department of Veterans' Affairs",
        coverage: "Statewide — Florida",
        serviceTypes: ["State veterans homes", "Benefits claims", "Employment assistance"],
        eligibility: "Florida veterans and eligible dependents",
        intake: "Call FDVA or visit a county veterans service office",
        website: "https://www.floridavets.org",
        phone: "727-319-7400",
      },
      {
        name: "New York — NYS Division of Veterans' Services",
        coverage: "Statewide — New York",
        serviceTypes: ["Housing assistance", "Benefits counseling", "Behavioral health referrals"],
        eligibility: "New York veterans and families",
        intake: "Contact regional DVS office or call statewide line",
        website: "https://veterans.ny.gov",
        phone: "888-838-7697",
      },
      {
        name: "Georgia — Georgia Department of Veterans Service",
        coverage: "Statewide — Georgia",
        serviceTypes: ["Claims assistance", "State veterans homes", "Employment services"],
        eligibility: "Georgia veterans and eligible dependents",
        intake: "Visit a local field office or call statewide number",
        website: "https://veterans.georgia.gov",
        phone: "404-656-2300",
      },
      {
        name: "North Carolina — NC Division of Veterans Affairs",
        coverage: "Statewide — North Carolina",
        serviceTypes: ["State veterans homes", "Benefits claims", "Education and employment"],
        eligibility: "North Carolina veterans and families",
        intake: "Contact a county veterans service officer or call state office",
        website: "https://www.milvets.nc.gov",
        phone: "919-807-4250",
      },
      {
        name: "Arizona — Arizona Department of Veterans' Services",
        coverage: "Statewide — Arizona",
        serviceTypes: ["Fiduciary services", "State veterans homes", "Benefits counseling"],
        eligibility: "Arizona veterans and eligible family members",
        intake: "Call statewide line or visit a Veterans Benefits Counselor",
        website: "https://dvs.az.gov",
        phone: "602-255-3373",
      },
    ],
  },
];
