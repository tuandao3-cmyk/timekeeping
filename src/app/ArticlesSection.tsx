import styles from './ArticlesSection.module.css';

const articles = [
  {
    id: 1,
    title: 'Hyratek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
    image: '/img/art1.png',
    date: '30/08/2024',
    excerpt: 'Hôm 30/8, Hyratek, công ty công nghệ tiên phong trong lĩnh vực cơ sở hạ tầng điện toán biên...'
  },
  {
    id: 2,
    title: 'Hyratek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
    image: '/img/art2.png',
    date: '30/08/2024',
    excerpt: 'Hôm 30/8, Hyratek, công ty công nghệ tiên phong trong lĩnh vực cơ sở hạ tầng điện toán biên...'
  },
  {
    id: 3,
    title: 'Hyratek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
    image: '/img/art3.png',
    date: '30/08/2024',
    excerpt: 'Hôm 30/8, Hyratek, công ty công nghệ tiên phong trong lĩnh vực cơ sở hạ tầng điện toán biên...'
  },
  {
    id: 4,
    title: 'Hyratek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
    image: '/img/art4.png',
    date: '30/08/2024',
    excerpt: 'Hôm 30/8, Hyratek, công ty công nghệ tiên phong trong lĩnh vực cơ sở hạ tầng điện toán biên...'
  },
  {
    id: 5,
    title: 'Hyratek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
    image: '/img/art5.png',
    date: '30/08/2024',
    excerpt: 'Hôm 30/8, Hyratek, công ty công nghệ tiên phong trong lĩnh vực cơ sở hạ tầng điện toán biên...'
  },
  {
    id: 6,
    title: 'Hyratek và Qualcomm hợp tác chiến lược về AI, đồng hành cùng dự án "Phục dựng ảnh liệt sĩ" của Hà Nội.',
    image: '/img/art6.png',
    date: '30/08/2024',
    excerpt: 'Hôm 30/8, Hyratek, công ty công nghệ tiên phong trong lĩnh vực cơ sở hạ tầng điện toán biên...'
  },


  // Thêm các bài viết khác tương tự
];

const ArticlesSection = () => {
  return (
    <section className={styles.articlesSection}>
      <h2 className={styles.title}>Các bài viết về chúng tôi</h2>
      <div className={styles.articleGrid}>
        {articles.map((article) => (
          <div key={article.id} className={styles.articleCard}>
            <img src={article.image} alt={article.title} className={styles.articleImage} />
            <div className={styles.articleContent}>
              <h3 className={styles.articleTitle}>{article.title}</h3>
              <p className={styles.articleExcerpt}>{article.excerpt}</p>
              <div className={styles.articleMeta}>
                <span className={styles.articleDate}>{article.date}</span>
                <a href="#" className={styles.readMore}>Xem chi tiết</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticlesSection;