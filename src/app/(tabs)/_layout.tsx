import { Ionicons } from "@expo/vector-icons";
import { router, Tabs } from "expo-router";
import { Pressable } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1E3A78",
        tabBarInactiveTintColor: "#94A3B8",
        tabBarStyle: {
          height: 75,
          paddingTop: 8,
          paddingBottom: 8,
        },
        headerTitleStyle: {
          fontSize: 28,
          fontWeight: "700",
        },
        headerShadowVisible: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
        headerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: "#E5E7EB",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Code Snippets",
          headerRight: () => (
            <Pressable
              onPress={() => router.push("/snippets/create")}
              style={{ marginRight: 16 }}
            >
              <Ionicons name="add-circle" size={34} color="#1E3A78" />
            </Pressable>
          ),
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
