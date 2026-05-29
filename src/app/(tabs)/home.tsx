import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const snippets = [
  {
    id: "1",
    title: "React Hook Form Validation",
    language: "TypeScript",
    tags: ["form", "validation"],
    code_content: "This is the code content",
  },
  {
    id: "2",
    title: "Axios API Request",
    language: "JavaScript",
    tags: ["api", "axios"],
    code_content: "This is the code content",
  },
  {
    id: "3",
    title: "AsyncStorage Save Data",
    language: "React Native",
    tags: ["storage", "local"],
    code_content: "This is the code content",
  },
  {
    id: "4",
    title: "Zod Schema Example",
    language: "TypeScript",
    tags: ["zod", "validation"],
    code_content: "This is the code content",
  },
];

export default function HomeScreen() {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    return snippets.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.language.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const renderItem = ({ item }: any) => (
    <Pressable
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "/snippets/[id]",
          params: {
            id: item.id,
            title: item.title,
            language: item.language,
            tags: JSON.stringify(item.tags),
            code: item.code,
            code_content: item.code_content,
          },
        })
      }
    >
      <View style={styles.cardHeader}>
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>

        <Ionicons name="arrow-forward" size={22} color="#111827" />
      </View>

      <View style={styles.dataRow}>
        <Text style={styles.data}>{item.code_content}</Text>
      </View>
      <View style={styles.dataRow}>
        <Text style={styles.data}>{item.tags.join(", ")}</Text>
      </View>
      <View style={styles.languageChip}>
        <Ionicons name="code-slash-outline" size={16} color="#111827" />

        <Text style={styles.languageText}>{item.language}</Text>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView edges={["left", "right"]} style={styles.container}>
      {/* Search */}

      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={22}
          color="#94A3B8"
          style={styles.searchIcon}
        />

        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search snippets..."
          placeholderTextColor="#94A3B8"
          style={styles.searchInput}
        />
      </View>

      {/* List */}

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    height: 56,
    marginBottom: 10,
    paddingHorizontal: 16,
  },

  searchIcon: {
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#111827",
  },

  card: {
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    paddingRight: 10,
  },

  dataRow: {
    flexDirection: "row",
    marginTop: 12,
  },

  data: {
    fontSize: 15,
    color: "#8B8B8B",
    marginRight: 20,
  },

  languageChip: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    marginTop: 18,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  languageText: {
    marginLeft: 8,
    fontSize: 13,
    color: "#111827",
    fontWeight: "500",
  },
});
