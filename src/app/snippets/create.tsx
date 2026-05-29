import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateSnippetScreen() {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("");
  const [tags, setTags] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#0F172A" />
        </Pressable>

        <Text style={styles.headerTitle}>Create New Snippet</Text>

        <View style={{ width: 40 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        {/* Title */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Title</Text>

          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="Enter snippet title"
            placeholderTextColor="#94A3B8"
            style={styles.input}
          />
        </View>

        {/* Code Content */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Code Content</Text>

          <TextInput
            value={code}
            onChangeText={setCode}
            placeholder="Paste your code here..."
            placeholderTextColor="#94A3B8"
            multiline
            textAlignVertical="top"
            style={styles.codeInput}
          />
        </View>

        {/* Programming Language */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Programming Language</Text>

          <TextInput
            value={language}
            onChangeText={setLanguage}
            placeholder="React Native, TypeScript..."
            placeholderTextColor="#94A3B8"
            style={styles.input}
          />
        </View>

        {/* Tags */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Tags</Text>

          <TextInput
            value={tags}
            onChangeText={setTags}
            placeholder="react, hooks, expo"
            placeholderTextColor="#94A3B8"
            style={styles.input}
          />
        </View>

        {/* Create Button */}
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Create Snippet</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },

  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "700",
    color: "#0F172A",
  },

  fieldContainer: {
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0F172A",
    marginBottom: 10,
  },

  input: {
    height: 55,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#0F172A",
  },

  codeInput: {
    minHeight: 140,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 14,
    padding: 16,
    fontSize: 15,
    color: "#0F172A",
    fontFamily: "monospace",
  },

  button: {
    marginTop: 10,
    height: 58,
    backgroundColor: "#1E3A78",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
  },
});
