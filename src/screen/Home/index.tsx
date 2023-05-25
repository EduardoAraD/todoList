import { useState } from "react";
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Card } from "../../components/Card";
import { CardEmpty } from "../../components/CardEmpty";
import { LogoView } from "../../components/LogoView";
import { TextNumber } from "../../components/TextNumber";
import { Task } from "../../models/Task";

import { styles } from './styles'
import plus from '../../assets/plus.png'
import { colors } from "../../assets/colors";

export function Home () {
  const [idIncrement, setIdIncrement] = useState(0);
  const [taskName, setTaskName] = useState('')
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask() {
    const namesTask = tasks.map(i => i.name);
    if(namesTask.includes(taskName)){
      return Alert.alert('JA tem', 'Você já possui está tarefa');
    }

    const task: Task = {
      id: idIncrement,
      isChecked: false,
      name: taskName,
    }
    setIdIncrement(prevState => prevState + 1)
    setTasks(prevState => [...prevState, task])
    setTaskName('')
  }

  function handleUpdateTask(value: boolean, id: number) {
    setTasks(prevState =>
      prevState.map(task => ({
        ...task,
        isChecked: task.id === id? value : task.isChecked
      }))
    )
  }

  function handleRemoveTask(id: number, name: string) {
    Alert.alert('Remover', `Remover a tarefa ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(task => task.id !== id)),
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <LogoView />
      <View style={styles.containerButton}>
        <TextInput
          style={styles.input}
          value={taskName}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors.gray300}
          onChangeText={setTaskName}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={handleAddTask}
        >
          <Image source={plus} />
        </TouchableOpacity>
      </View>

      <View style={styles.viewTask}>
        <View style={styles.info}>
          <TextNumber
            color={colors.blue}
            name="Criadas"
            value={tasks.filter(i => i.isChecked).length}
          />
          <TextNumber
            color={colors.purple}
            name="Concluídas"
            value={tasks.filter(i => !i.isChecked).length}
          />
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => `${item.id}-${item.name}`}
          renderItem={({ item }) => (
            <Card
              id={item.id}
              isCheck={item.isChecked}
              name={item.name}
              onChangeCheck={handleUpdateTask}
              onRemoveTask={handleRemoveTask}
            />
          )}
          ListEmptyComponent={() => <CardEmpty /> }
        />
      </View>
    </View>
  )
}