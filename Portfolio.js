function changetab(event, tentab) {
    // 1. Chặn hành động chuyển trang của thẻ a
    event.preventDefault();

    // 2. Ẩn tất cả nội dung cũ
    document.querySelectorAll('.content').forEach(element => {
        element.classList.remove('active');
    });

    // 3. Xóa class active ở tất cả các nút menu cũ
    document.querySelectorAll('.menulink').forEach(element => {
        element.classList.remove('active');
    });

    // 4. Hiện nội dung tab mới
    const targetContent = document.getElementById(tentab);
    if (targetContent) {
        targetContent.classList.add('active');
    }

    // 5. Active cái nút vừa bấm (QUAN TRỌNG: Dùng currentTarget)
    event.currentTarget.classList.add('active');
}