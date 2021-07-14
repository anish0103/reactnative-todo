import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import AddButton from './component/addButton';
import AddModel from './component/addModel';
import Header from './component/header';
import Item from './component/item';
import Username from './component/username';

export default function App() {
  const [model, setmodel] = useState(false);
  const [list, setlist] = useState([]);
  const [load, setload] = useState(true);
  const [show, listshow] = useState(false);
  const [login, setlogin] = useState(false);
  const [user, setuser] = useState('');

  const username = (data) => {
    setuser(data);
    setlogin(true);
    setload(false);
}

  const fetchlist = async () => {
    const response = await fetch(`https://reacttodo-b5783-default-rtdb.firebaseio.com/${user}.json`)
    const data = await response.json()
    while (!response.ok);
    convertlist(data);
  }

  if (!load) {
    fetchlist();
  }

  let todo = [];
  const convertlist = (t) => {
    if (t === null) {
      return setload(true);
    }
    Object.keys(t).forEach((key) => todo.push({ id: key, des: t[key].des }));
    setlist(todo);
    listshow(true);
    setload(true);
  }

  const addbtn = () => {
    setmodel(true);
  }

  const modelhandler = () => {
    setmodel(false);
  }

  const postlist = async (listdata) => {
    const data = { id: Math.random(), des: listdata }
    const response = await fetch(`https://reacttodo-b5783-default-rtdb.firebaseio.com/${user}.json`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    while (!response.ok);
    fetchlist();
  }

  const fetchremove = async (id) => {
    const response = await fetch(`https://reacttodo-b5783-default-rtdb.firebaseio.com/${user}/${id}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: null
    })
    while (!response.ok);
    fetchlist();
  }

  const removeitem = (i, t) => {
    const index = list.indexOf(list[t]);
    list.splice(index, 1);
    const d = list.map((a) => {
      return {
        id: a.id,
        des: a.des
      }
    })
    setlist(d)
    fetchremove(i);
    if (d.length === 0) {
      listshow(false)
    }
  }

  const inputhandler = (value) => {
    setmodel(false);
    postlist(value);
    listshow(true);
  }

  let content;
  if (!load) {
    content = 'Loading...';
  } else {
    content = 'Click on Add Button to Add content!!!';
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {login && <Header title={'Home'} />}
      {show && login && <View style={{ width: '100%', flex: 1 }} >
        <FlatList onRefresh={fetchlist}
          refreshing={false}
          data={list} renderItem={(data) => <Item title={data.item.des} id={data.item.id} index={data.index} removeitem={removeitem} />} keyExtractor={item => item.id}
        />
      </View>}
      {!show && login && <Text style={{ fontSize: 22, fontWeight: 'bold' }} >{content}</Text>}
      {login && <AddModel visible={model} handler={modelhandler} inputhandler={inputhandler} />}
      {login && <AddButton onclick={addbtn} />}
      {!login && <Username usernamehandler={username} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 90,
    alignItems: 'center',
  },
});
