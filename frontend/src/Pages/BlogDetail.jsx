import React from "react";
import { useParams } from "react-router-dom";
import "../styles/BlogDetail.css";

const BlogDetail = () => {
  const { id } = useParams();

  const blogData = {
    1: {
      title: "The Importance of Regular Checkups",
      content: `
        Regular checkups are an essential part of maintaining good health. 
        These visits allow your healthcare provider to monitor your health status and catch potential problems early. 
        During a checkup, your doctor will perform a physical examination, check your vital signs, and may order laboratory tests.
        
        One of the main benefits of regular checkups is the early detection of diseases. 
        For example, high blood pressure and diabetes can be asymptomatic in their early stages. 
        Regular monitoring can help catch these conditions before they lead to serious complications, such as heart disease or kidney failure.
        
        Additionally, checkups provide an opportunity for you to discuss any health concerns with your doctor. 
        Whether you’re experiencing symptoms or just have questions about your lifestyle, checkups allow for open communication.
        
        Vaccinations are another important aspect of regular checkups, especially for children and young adults. 
        Staying up to date with vaccines helps protect not only your health but also the health of those around you.
        
        In conclusion, making regular checkups a priority in your healthcare routine can significantly enhance your overall health and well-being. 
        Remember, prevention is always better than cure!
      `,
    },
    2: {
      title: "Top 10 Health Tips for Busy Professionals",
      content: `
        Being a busy professional can make it challenging to maintain a healthy lifestyle. 
        Here are ten health tips that can help you stay on track, even with a packed schedule:

        1. Plan Your Meals
         Take time on weekends to prepare healthy meals for the week ahead. This will help you avoid unhealthy fast food.

        2. Stay Hydrated
         Keep a water bottle at your desk and aim to drink at least eight glasses of water a day.

        3.  Incorporate Exercise 
         Even short workouts can be effective. Consider a quick 10-minute walk or using the stairs instead of the elevator.
        4.  Get Enough Sleep 
         Prioritize sleep by establishing a bedtime routine that allows for at least 7-8 hours of rest each night.
        5.  Take Breaks 
         Regular short breaks during work can boost productivity and reduce stress. Step away from your desk to clear your mind.
        6.  Practice Mindfulness 
         Spend a few minutes each day practicing mindfulness or meditation to enhance your mental clarity and focus.
        7.  Limit Screen Time 
         Reduce time spent on screens outside of work to improve eye health and overall well-being.
        8.  Stay Social 
         Make time for friends and family. Social interactions can significantly improve your mental health.
        9.  Monitor Your Health 
         Schedule regular checkups and be proactive about any health concerns that arise.
        10.  Stay Organized 
         Keep a planner to manage your tasks efficiently, reducing stress and making room for self-care.

        Following these tips can help you balance a busy work life while still prioritizing your health!
      `,
    },
    3: {
      title: "How to Choose the Right Doctor",
      content: `
        Choosing the right doctor is crucial for your health and well-being. Here are some tips to help you make the best choice:

        1.  Understand Your Needs 
         Determine what type of care you need. For general health, a family doctor may be best. For specific issues, consider a specialist.
        
        2.  Check Qualifications 
         Research the doctor's credentials. Ensure they are board-certified and have the necessary qualifications for your needs.
        
        3.  Consider Experience 
         Look for a doctor with experience in treating your specific health issue. Experienced doctors are often better equipped to handle complex cases.
        
        4.  Read Reviews 
         Check online reviews and testimonials. They can provide insights into other patients' experiences with the doctor.
        
        5.  Evaluate Communication Style 
         Schedule a consultation to see if the doctor communicates clearly and makes you feel comfortable asking questions.
        
        6.  Check Availability 
         Make sure the doctor’s schedule aligns with yours. Consider their office hours and whether they can accommodate urgent appointments.
        
        7.  Insurance Coverage 
         Verify that the doctor accepts your insurance plan. This can help reduce your out-of-pocket expenses.
        
        8.  Location Matters 
         Choose a doctor whose office is conveniently located, as this can make it easier to attend appointments.

        9.  Trust Your Instincts 
         Ultimately, trust your feelings about the doctor. You should feel confident and at ease with your choice.

        Remember, taking the time to choose the right doctor is an important step in ensuring you receive the best possible healthcare.
      `,
    },
    4: {
      title: "Understanding Mental Health",
      content: `
        Mental health is a vital part of our overall well-being. It affects how we think, feel, and act. Here’s why understanding mental health is essential:

        1.  Importance of Mental Health 
         Good mental health contributes to our ability to enjoy life, manage stress, and relate to others. It’s crucial for maintaining a healthy lifestyle.
        
        2.  Common Mental Health Issues 
         Conditions like anxiety, depression, and stress are common but often go unrecognized. Understanding these issues can help individuals seek appropriate help.
        
        3.  Signs of Poor Mental Health 
         Changes in mood, behavior, or energy levels can signal mental health problems. If you or someone you know experiences these changes, it’s important to seek help.
        
        4.  Seeking Help 
         Mental health issues are treatable. Don’t hesitate to reach out to professionals for support, whether through therapy or medication.
        
        5.  Self-Care 
         Engaging in activities you enjoy, practicing mindfulness, and maintaining social connections can positively impact your mental health.
        
        6.  Breaking the Stigma 
         Talking openly about mental health can help reduce stigma. The more we discuss it, the more we can help those in need feel comfortable seeking help.

        In conclusion, understanding and prioritizing mental health is essential for living a balanced and fulfilling life. If you need support, remember that help is available.
      `,
    },
    5: {
      title: "Healthy Eating for a Stronger Body",
      content: `
        Healthy eating is essential for maintaining a strong body and mind. Here are some tips to help you eat better:

        1.  Balanced Diet 
         Aim for a balanced diet that includes fruits, vegetables, whole grains, lean proteins, and healthy fats.
        
        2.  Portion Control 
         Be mindful of portion sizes to avoid overeating. Smaller, more frequent meals can help manage hunger.
        
        3.  Stay Hydrated 
         Drink plenty of water throughout the day. Staying hydrated is vital for your body's functions.
        
        4.  Limit Processed Foods : Try to limit foods high in sugar, salt, and unhealthy fats. Instead, opt for whole foods that provide essential nutrients.
        
        5.  Plan Your Meals : Preparing meals in advance can help you make healthier choices and avoid the temptation of fast food.
        
        6.  Listen to Your Body : Pay attention to your hunger and fullness cues. Eat when you're hungry and stop when you're satisfied.
        
        7.  Enjoy Your Food : Take time to savor your meals. Eating mindfully can enhance your enjoyment and help with digestion.

        Healthy eating doesn't have to be complicated. By making small, sustainable changes, you can significantly improve your overall health and energy levels.
      `,
    },
    6: {
      title: "How to Manage Stress Effectively",
      content: `
        Stress is a common part of life, but managing it effectively is crucial for your mental and physical health. Here are some strategies:

        1.  Identify Stressors : Keep a journal to identify what causes you stress. Understanding your triggers can help you address them.
        
        2.  Practice Relaxation Techniques : Engage in activities that promote relaxation, such as deep breathing, meditation, or yoga.
        
        3.  Stay Active : Regular physical activity can boost your mood and reduce stress levels. Aim for at least 30 minutes of exercise most days.
        
        4.  Maintain a Healthy Lifestyle : Eating well, sleeping enough, and avoiding excessive caffeine or alcohol can improve your resilience to stress.
        
        5.  Talk About It : Sharing your feelings with friends, family, or a therapist can provide support and new perspectives on your stressors.
        
        6.  Set Boundaries : Learn to say no and manage your time effectively. Avoid overcommitting to prevent feeling overwhelmed.
        
        7.  Make Time for Hobbies : Engage in activities that you enjoy to relieve stress and bring joy into your life.

        Remember, it’s important to find stress management techniques that work for you. Taking small steps can lead to significant improvements in your overall well-being.
      `,
    },
  };

  const blog = blogData[id];

  return (
    <div className="blog-detail-container">
      {blog ? (
        <>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </>
      ) : (
        <h1>Blog Not Found</h1>
      )}
    </div>
  );
};

export default BlogDetail;
