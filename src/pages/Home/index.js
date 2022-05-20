import { StyleSheet, Text, View, FlatList } from "react-native";
import Actions from "../../components/Actions";
import Balance from "../../components/Balance";
import Header from "../../components/Header";
import Moviments from "../../components/Moviments";

const list = [
  {
    id: 1,
    label: "Boleto Conta de luz",
    value: "299,90",
    date: "20/05/2022",
    type: 0,
  },
  {
    id: 2,
    label: "Pix leonardo",
    value: "150,00",
    date: "20/05/2022",
    type: 1,
  },
  {
    id: 3,
    label: "Salário",
    value: "4.550,66",
    date: "15/05/2022",
    type: 1,
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header userName={"Nataniele Lima"} />
      <Balance saldo={"4.560,65"} gastos={"673,00"} />
      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Moviments data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
