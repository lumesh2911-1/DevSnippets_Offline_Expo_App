import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SnippetDetailScreen() {
  const { title, language, tags, code, code_content } = useLocalSearchParams();

  const parsedTags = tags ? JSON.parse(tags as string) : [];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#111827" />
        </Pressable>

        <Text style={styles.headerTitle}>Snippet Detail</Text>

        <View style={{ width: 24 }} />
      </View>

      <ScrollView>
        <Text style={styles.label}>Title</Text>

        <View style={styles.box}>
          <Text style={styles.value}>{title}</Text>
        </View>

        <Text style={styles.label}>Programming Language</Text>

        <View style={styles.languageChip}>
          <Ionicons name="code-slash-outline" size={16} color="#111827" />

          <Text style={styles.languageText}>{language}</Text>
        </View>

        <Text style={styles.label}>Tags</Text>

        <View style={styles.box}>
          <Text style={styles.value}>{parsedTags.join(", ")}</Text>
        </View>

        <Text style={styles.label}>Code Content</Text>

        <View style={styles.codeBox}>
          <Text style={styles.code}>{code_content}</Text>
        </View>

        <View style={styles.actions}>
          <Pressable style={styles.actionBtn}>
            <Ionicons name="heart-outline" size={26} color="#ff9b0f" />
          </Pressable>

          <Pressable
            style={styles.actionBtn}
            onPress={() =>
              Alert.alert("Confirmation?", "Are you want to edit this snippet?")
            }
          >
            <Ionicons
              name="create-outline"
              size={26}
              color="green"
              style={{ fontWeight: "bold" }}
            />
          </Pressable>

          <Pressable
            style={styles.actionBtn}
            onPress={() =>
              Alert.alert(
                "Confirmation?",
                "Are you want to delete this snippet?",
              )
            }
          >
            <Ionicons name="trash-outline" size={26} color="#EF4444" />
          </Pressable>
        </View>
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
    justifyContent: "space-between",
    paddingVertical: 12,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
  },

  label: {
    marginTop: 18,
    marginBottom: 8,
    fontSize: 15,
    fontWeight: "600",
  },

  box: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 14,
  },

  value: {
    fontSize: 15,
    color: "#111827",
  },

  languageChip: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  languageText: {
    marginLeft: 8,
    fontSize: 13,
    fontWeight: "500",
  },

  codeBox: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 14,
    minHeight: 120,
    backgroundColor: "#F8FAFC",
  },

  code: {
    fontFamily: "monospace",
    fontSize: 14,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 24,
  },

  actionBtn: {
    width: "31%",
    height: 54,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
});
