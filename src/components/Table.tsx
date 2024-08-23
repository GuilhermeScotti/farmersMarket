import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import { FarmerInfoProps } from "./RowData";

const getFarmerData = (): Promise<FarmerInfoProps[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const farmers: FarmerInfoProps[] = [
        {
          imgSrc:
            "https://food.unl.edu/newsletters/images/variety-of-peppers.png",
          farmerName: "David",
          produceType: "Peppers",
          contactUrl: "https://www.google.com.br",
        },
        {
          imgSrc:
            "https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg",
          farmerName: "John",
          produceType: "Apples",
          contactUrl: "https://www.google.com.br",
        },
        {
          imgSrc:
            "https://www.theperfectloaf.com/wp-content/uploads/2015/12/theperfectloaf-mybestsourdoughrecipe-title-1-1080x864.jpg",
          farmerName: "Chris",
          produceType: "Sourdough Bread",
          contactUrl: "https://www.google.com.br",
        },
        {
          imgSrc:
            "https://www.womansworld.com/wp-content/uploads/2021/02/oil.jpg?resize=953,536",
          farmerName: "Sarah",
          produceType: "Olive Oil",
          contactUrl: "https://www.google.com.br",
        },
        {
          imgSrc:
            "https://www.arkansas.com/sites/default/files/styles/article_x_large/public/2023-03/Mead.jpg?itok=bUClLEif",
          farmerName: "Mary",
          produceType: "Mead",
          contactUrl: "https://www.google.com.br",
        },
        {
          imgSrc:
            "https://food.unl.edu/newsletters/images/variety-of-peppers.png",
          farmerName: "David",
          produceType: "Peppers",
          contactUrl: "https://www.google.com.br",
        },
        {
          imgSrc:
            "https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg",
          farmerName: "John",
          produceType: "Apples",
          contactUrl: "https://www.google.com.br",
        },
        {
          imgSrc:
            "https://www.theperfectloaf.com/wp-content/uploads/2015/12/theperfectloaf-mybestsourdoughrecipe-title-1-1080x864.jpg",
          farmerName: "Chris",
          produceType: "Sourdough Bread",
          contactUrl: "https://www.google.com.br",
        },
        {
          imgSrc:
            "https://www.womansworld.com/wp-content/uploads/2021/02/oil.jpg?resize=953,536",
          farmerName: "Sarah",
          produceType: "Olive Oil",
          contactUrl: "https://www.google.com.br",
        },
        {
          imgSrc:
            "https://www.arkansas.com/sites/default/files/styles/article_x_large/public/2023-03/Mead.jpg?itok=bUClLEif",
          farmerName: "Mary",
          produceType: "Mead",
          contactUrl: "https://www.google.com.br",
        },
        {
          imgSrc:
            "https://food.unl.edu/newsletters/images/variety-of-peppers.png",
          farmerName: "David",
          produceType: "Peppers",
          contactUrl: "https://www.google.com.br",
        },
        {
          imgSrc:
            "https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg",
          farmerName: "John",
          produceType: "Apples",
          contactUrl: "https://www.google.com.br",
        },
        {
          imgSrc:
            "https://www.theperfectloaf.com/wp-content/uploads/2015/12/theperfectloaf-mybestsourdoughrecipe-title-1-1080x864.jpg",
          farmerName: "Chris",
          produceType: "Sourdough Bread",
          contactUrl: "https://www.google.com.br",
        },
        {
          imgSrc:
            "https://www.womansworld.com/wp-content/uploads/2021/02/oil.jpg?resize=953,536",
          farmerName: "Sarah",
          produceType: "Olive Oil",
          contactUrl: "https://www.google.com.br",
        },
        {
          imgSrc:
            "https://www.arkansas.com/sites/default/files/styles/article_x_large/public/2023-03/Mead.jpg?itok=bUClLEif",
          farmerName: "Mary",
          produceType: "Mead",
          contactUrl: "https://www.google.com.br",
        },
      ];
      resolve(farmers);
    }, 2000);
  });
};

const chunkArray = (
  array: FarmerInfoProps[],
  size: number
): FarmerInfoProps[][] => {
  const result: FarmerInfoProps[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

var stateFlag: boolean = true;

const Table = () => {
  const [farmerGroups, setFarmerGroups] = useState<FarmerInfoProps[][]>([]);

  const setFarmerGroupsFromArray = async () => {
    const farmers = await getFarmerData();
    const groupedFarmers = chunkArray(farmers, 5);
    setFarmerGroups(groupedFarmers);
  };

  useEffect(() => {
    const fetchData = async () => {
      await setFarmerGroupsFromArray();
    };

    fetchData();
  }, []);

  const changeState = async () => {
    setFarmerGroups([]);

    if (stateFlag) {
      stateFlag = false;

      const farmers: FarmerInfoProps[][] = [
        [
          {
            imgSrc:
              "https://food.unl.edu/newsletters/images/variety-of-peppers.png",
            farmerName: "David",
            produceType: "Peppers",
            contactUrl: "https://www.google.com.br",
          },
          {
            imgSrc:
              "https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg",
            farmerName: "John",
            produceType: "Apples",
            contactUrl: "https://www.google.com.br",
          },
        ],
      ];

      setFarmerGroups(farmers);
    } else {
      stateFlag = true;
      await setFarmerGroupsFromArray();
    }

    setFarmerGroups;
  };

  return (
    <div>
      <button onClick={changeState}>Change state</button>
      
      <table>
        <tbody>
          {farmerGroups.map((group, index) => (
            <TableRow key={index} farmers={group} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
