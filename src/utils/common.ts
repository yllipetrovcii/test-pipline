export const extractInitials = (name?: string | null) => {
  if (!name || name.trim() === '') {
    return;
  }

  // Trim and split the name into parts
  const nameParts = name.trim().split(' ');

  // Extract the first letter of the first word
  const firstInitial = nameParts[0][0].toUpperCase();

  // Check if there's more than one part to the name
  const lastPart =
    nameParts.length > 1 ? nameParts[nameParts.length - 1] : nameParts[0];

  // Extract the first letter of the last word (or the first word if there's only one)
  const lastInitial = lastPart[0].toUpperCase();

  // Format the initials
  return `${firstInitial}.${lastInitial}`;
};
