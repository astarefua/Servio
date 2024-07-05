// ReviewsScreen.js
import React from 'react';
import { View, ScrollView, StyleSheet , Text} from 'react-native';
import ReviewCard from '../../../Components/ReviewCard';

const reviews = [
    {
        avatar: 'https://example.com/avatar1.jpg',
        name: 'I Am A Star',
        rating: 5,
        review: 'Amazing food !',
        date: '2024-07-05',
      },
      
  {
    avatar: 'https://example.com/avatar2.jpg',
    name: 'Mercy',
    rating: 4,
    review: 'Great service!',
    date: '2024-07-05',
  },
  {
    avatar: 'https://example.com/avatar3.jpg',
    name: 'Deborah D',
    rating: 4,
    review: 'Very good, but a bit pricey.',
    date: '2024-07-04',
  },
  // Add more reviews as needed
];

const ReviewsScreen = () => {
  return (
    <ScrollView style={styles.container}>
        <Text style={styles.title}>Customer Reviews</Text>
      {reviews.map((review, index) => (
        <ReviewCard
          key={index}
          avatar={review.avatar}
          name={review.name}
          rating={review.rating}
          review={review.review}
          date={review.date}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  title:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:10
  }
});

export default ReviewsScreen;
