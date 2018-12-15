function isValidJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch/*This part is redundant -> (unusedVariable)*/ {
    return false;
  }
}