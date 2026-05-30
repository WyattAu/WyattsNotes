import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

const API_BASE = process.env.EXPO_PUBLIC_API_BASE || 'https://wyattsnotes.wyattau.com/api/v1';

const Tab = createBottomTabNavigator();

const SUBJECTS = [
  { slug: 'ib', name: 'IB', color: '#e74c3c' },
  { slug: 'dse', name: 'DSE', color: '#3498db' },
  { slug: 'alevel-maths-physics', name: 'A-Level M&P', color: '#2ecc71' },
  { slug: 'alevel-sciences', name: 'A-Level Sciences', color: '#f39c12' },
  { slug: 'qualifications', name: 'Qualifications', color: '#9b59b6' },
  { slug: 'programming', name: 'Programming', color: '#1abc9c' },
  { slug: 'university', name: 'University', color: '#e67e22' },
];

function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.subjectCard, { borderLeftColor: item.color }]}
      onPress={() => navigation.navigate('SubjectDetail', { slug: item.slug })}
    >
      <Text style={styles.subjectName}>{item.name}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList data={SUBJECTS} renderItem={renderItem} keyExtractor={(s) => s.slug} contentContainerStyle={styles.list} />
    </SafeAreaView>
  );
}

function SearchScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>Search across all notes</Text>
        <Text style={styles.placeholderSub}>Coming soon — Algolia integration</Text>
      </View>
    </SafeAreaView>
  );
}

function BookmarksScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>No bookmarks yet</Text>
        <Text style={styles.placeholderSub}>Save content for offline reading</Text>
      </View>
    </SafeAreaView>
  );
}

function SettingsScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.placeholder}>
        <Text style={styles.placeholderText}>Settings</Text>
        <Text style={styles.placeholderSub}>Language, theme, notifications</Text>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Tab.Navigator screenOptions={{ headerShown: true, headerTitleStyle: { fontWeight: '600' } }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Subjects' }} />
        <Tab.Screen name="Search" component={SearchScreen} options={{ title: 'Search' }} />
        <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#f8f9fa' },
  list: { padding: 12 },
  subjectCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  subjectName: { fontSize: 16, fontWeight: '600', color: '#1a1a2e' },
  placeholder: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  placeholderText: { fontSize: 18, fontWeight: '600', color: '#333' },
  placeholderSub: { fontSize: 14, color: '#999', marginTop: 4 },
});
