async function getUserDataFlow(userId) {
  try {
    // 1. Foydalanuvchini olish
    const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await userRes.json();

    // Agar user topilmasa, obyekt bo'sh kelishi mumkin, tekshiramiz
    if (!user || !user.id) {
      console.log("Foydalanuvchi topilmadi");
      return;
    }
    console.log("Foydalanuvchi topildi:", user.name);

    // 2. Foydalanuvchiga tegishli postlarni olish
    // URL bitta qatorda bo'lishi shart!
    const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
    const posts = await postsRes.json();
    console.log("Postlar soni:", posts.length);

    // 3. Agar postlar bo'lsa, birinchi postning commentlarini olish
    if (posts.length > 0) {
      const firstPostId = posts[0].id;
      const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${firstPostId}`);
      const comments = await commentsRes.json();
      
      console.log("Birinchi postdagi commentlar:", comments.length, "ta");
      return comments;
    } else {
      console.log("Bu foydalanuvchida postlar mavjud emas.");
    }

  } catch (error) {
    // Tarmoq xatosi yoki URL xatosini tutib olish
    console.error("Jarayon davomida xato yuz berdi:", error.message);
  }
}

// Funksiyani ishlatish (masalan, 1-ID dagi foydalanuvchi uchun)
getUserDataFlow(1);