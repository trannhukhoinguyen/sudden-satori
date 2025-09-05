export interface CongRongLu {
  id: number;
  titleOfficial?: string;
  title?: string;
  group: number;
  path: string;
  description: string;
  author?: string,
  cover?: string,
}

/*
* * */

const CongRongLus: CongRongLu[] = [
  {
    id: 1,
    titleOfficial: "SƠ QUAN",
    title: "SƠ QUAN",
    group: 1,
    path: "evc001-khong-roi-giai-cap",
    description: "..."
  },
];

export default CongRongLus;

/*
*
* */
