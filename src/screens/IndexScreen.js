import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
//import { Context as BlogContext } from "../context/BlogContext";
const IndexScreen = () => {
  const { state, addBlogPosts } = useContext(Context);
  return (
    <View>
      <Button title="Add Blog" onPress={addBlogPosts} />
      <FlatList
        data={state}
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
