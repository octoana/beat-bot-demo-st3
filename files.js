const items = [
  "Item 1. Business",
  "Item 1A. Risk Factors",
  "Item 1B. Unresolved Staff Comments",
  "Item 2. Properties",
  "Item 3. Legal Proceedings",
  "Item 4. Mine Safety Disclosures",
  "Item 5. Market for Registrant’s Common Equity, Related Stockholder Matters and Issuer Purchases of Equity Securities",
];

const exampleItemSections = [
  {
    name: "Item 5. ",
    date: "2021-01-01",
    size: "1.5 MB",
    type: "pdf",
  },
  {
    name: " ITEM 1A. ",
    date: "2021-01-01",
    size: "1.5 MB",
    type: "pdf",
  },
  {
    name: "Item 2. Properties",
    date: "2021-01-01",
    size: "1.5 MB",
    type: "pdf",
  },
];

// I have a list of item sections where the name of each section is non-standard. I have a list of standard item names and I want to loop over the sections array and return the item from the items array that each one matches most closely. Is there an algorithm that can help me with this?
// Levenshtein distance algorithm
