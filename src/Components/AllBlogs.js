import React from 'react';
import BlogItem from './BlogItem';
import './Css/Blog.css';
import blog1 from '../Assets/Blogs/blog1.jpg';
import blog2 from '../Assets/Blogs/blog2.jpg';
import blog3 from '../Assets/Blogs/blog3.jpg';
import blog4 from '../Assets/Blogs/blog4.jpg';
import blog5 from '../Assets/Blogs/blog5.jpg';
import blog6 from '../Assets/Blogs/blog6.jpg';

function AllBlogs() {
    const blogs = [
        { image: blog1, 
            title: 'What Is the Difference Between Fundamentalist Christianity and Evangelical Christianity?', 
            content: 'Fundamentalist Christianity strictly adheres to the King James Bible and emphasizes separation from non-believers, often opting for homeschooling and traditional values. They are generally opposed to many groups and ideas, viewing them as enemies. Evangelical Christianity, on the other hand, also believes in Biblical inerrancy but is open to various translations and collaborates with other Christians. They support both Christian and public education, adapt traditions for outreach, and tend to be more cooperative and less adversarial.' },
        { image: blog2, 
            title: 'Why Doesn’t God Do Something?', 
            content: 'Habakkuk questioned why God would use the wicked Chaldeans to punish Judah, asking, "Why doesn’t God do something?" and "Why would God do that?" God’s response was that He would act in His own time, and His judgment would eventually come to all nations, including the Chaldeans. He assured Habakkuk that His plan would unfold as intended and that His ways are beyond human understanding. Instead of questioning God’s actions, we are called to trust in His timing, be grateful for His patience, and actively engage in His work on Earth, exemplified through Jesus.' },
        { image: blog3, 
            title: 'Benefits of Reading the Bible In a Year', 
            content: 'Reading the Bible in a year offers numerous benefits. It provides valuable historical and cultural insights, shedding light on the ancient contexts and practices reflected in its pages. The Bible also offers practical wisdom and life guidance, with books like Proverbs offering advice and Psalms providing comfort in times of struggle. Through this reading journey, you can gain a deeper understanding of God’s nature, His plans, and His attributes such as love and grace, fostering a stronger relationship with Him. Additionally, engaging with the Bible can lead to personal transformation, renewing your mind and aligning your actions with Christ’s teachings. It also provides an opportunity to connect with a community of believers, allowing for shared insights and mutual support. Overall, reading the Bible in a year can enrich your life and deepen your spiritual understanding.' },
        { image: blog4, 
            title: 'Inner Peace Is Possible', 
            content: 'In Isaiah 26:3-4, we are assured that God will keep in perfect peace those who steadfastly trust in Him, highlighting that true, lasting peace is not found in understanding every detail of our lives but in relying on God’s eternal nature. Paul Tripp emphasizes that our minds should be intentionally filled with God’s truth rather than the fluctuating emotions and circumstances of life. By choosing to center our thoughts around God’s promises and being mindful of His past deliverances, we can maintain focus and peace amidst life’s challenges. Practicing self-forgetfulness involves encouraging others, remembering God’s past faithfulness in our own lives, and deepening our understanding of God as our Rock. This approach fosters joyful freedom, allowing us to navigate life with greater faith and stability.' },
        { image: blog5, 
            title: 'The War Machine rolls on and our government continues to lie', 
            content: 'The portrayal of the Ukraine war by Western media and officials suggests progress, but this view may be influenced by economic and strategic interests. U.S. Senators Lindsey Graham and Richard Blumenthal praise Ukraine’s efforts, but their support could be driven by ties to the military-industrial complex.John Mearsheimer critiques this narrative, noting that despite headlines about Ukrainian advances, the real measure of success is the casualty exchange ratio. Ukraine, with fewer resources, may be suffering heavy losses, and the recent incursions might not offer significant strategic advantages.This situation, along with conflicts like the one in Gaza, underscores the need for critical evaluation of official narratives and highlights the importance of advocating for peace and justice. For more on these topics, join the discussions on "The Business of War" and the conflict in Gaza on the Determinetruth YouTube page.' },
        { image: blog6, 
            title: 'What Is Faith? How To Trust God And Find Strength In Him', 
            content: 'Before I gave my life to Christ, I was constantly searching for answers and trying to control my circumstances. I prayed for God’s protection, recognizing my limitations despite my efforts. After accepting Christ, I understood that faith isn’t about achieving personal desires but trusting God’s will. Faith means relying on God’s promises, not manifesting outcomes through personal effort. It involves resting in God’s plan and being obedient, even when faced with uncertainty. Faith is a gift from God that transforms our lives. As Hebrews 11:6 says, "Without faith it is impossible to please Him." I’m grateful for the chance to walk with God, trusting Him with my life and finding joy in His promises.' },
      ];

  return (
    <>
      <h1 className='title'>--All Blogs--</h1>
      <section id="blogs" className="blogs">
        <div className="container">
        {blogs.map((blog, index) => (
          <BlogItem
            key={index}
            image={blog.image}
            title={blog.title}
            content={blog.content}
          />
        ))}
      </div>
    </section>
  </>
  );
}

export default AllBlogs;
