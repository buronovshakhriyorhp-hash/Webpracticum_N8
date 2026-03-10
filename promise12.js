function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Nolga bo'lish mumkin emas!");
    }
    const result = a / b;
    console.log(`Natija: ${result}`);
    return result;
  } catch (error) {
    console.error(`Xatolik yuz berdi: ${error.message}`);
    return error.message;
  }
}
divide(10, 2); // Natija: 5
divide(10, 0); // Xatolik yuz berdi: Nolga bo'lish mumkin emas!