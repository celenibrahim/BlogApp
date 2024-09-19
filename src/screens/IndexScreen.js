import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import React, { useContext } from "react";
import BlogContext from "../context/BlogContext";
const IndexScreen = () => {
  const { data, addBlogPosts } = useContext(BlogContext);
  return (
    <View>
      <Button title="Add Blog" onPress={addBlogPosts} />
      <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});
