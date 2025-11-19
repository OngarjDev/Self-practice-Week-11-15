async function setupDeclaredStatus() {
  try {
    const element = $(SELECTORS.declaredStatus);
    if (!element) return;

    const token = tokenAuth();
    const data = await getIdDeclaredPlan(token.preferred_username);
    const plans = await loadContent();
    const selectedPlan = plans.find(p => p.id === data.planId);
    if (!data || (Array.isArray(data) && data.length === 0)) {
      element.innerHTML = 'Not Declared';
      return;
    }

    const planCode = selectedPlan.planCode;
    const planName = selectedPlan.nameEng;
    const declaredAt = new Date(data.updatedAt);
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const datePart = new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      timeZone,
    }).format(declaredAt);

    const timePart = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone,
    }).format(declaredAt);

    element.innerHTML = `Declared ${planCode} - ${planName} on ${datePart}, ${timePart} (${timeZone})`;
  } catch (err) {
    console.error(err);
  }
}