export default function determineColor(temp, preferences) {
  if (!preferences) return "black";

  const tooCold = parseFloat(preferences.tooColdTemp);
  const tooWarm = parseFloat(preferences.tooWarmTemp);

  if (temp <= tooCold) return "#2B9CD9";
  if (temp >= tooWarm) return "#FF6868";
  return "#FFB039";
}
