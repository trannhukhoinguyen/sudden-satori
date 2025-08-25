import ViMasterDb from "../../data/masters/ViMasterDb.tsx";
import InMasterDb from "../../data/masters/InMasterDb.tsx";
import JpMasterDb from "../../data/masters/JpMasterDb.tsx";
import KoMasterDb from "../../data/masters/KoMasterDb.tsx";

import CnLv0MasterDb from "../../data/masters/CnLv0MasterDb.tsx";
import CnLv1MasterDb from "../../data/masters/CnLv1MasterDb.tsx";
import CnLv2MasterDb from "../../data/masters/CnLv2MasterDb.tsx";
import CnLv3MasterDb from "../../data/masters/CnLv3MasterDb.tsx";
import CnLv4MasterDb from "../../data/masters/CnLv4MasterDb.tsx";
import CnLv5MasterDb from "../../data/masters/CnLv5MasterDb.tsx";
import CnLv6MasterDb from "../../data/masters/CnLv6MasterDb.tsx";
import CnLv7MasterDb from "../../data/masters/CnLv7MasterDb.tsx";
import CnLv8MasterDb from "../../data/masters/CnLv8MasterDb.tsx";
import CnLv9MasterDb from "../../data/masters/CnLv9MasterDb.tsx";
import CnLv10MasterDb from "../../data/masters/CnLv10MasterDb.tsx";
import CnLv11MasterDb from "../../data/masters/CnLv11MasterDb.tsx";
import CnLv12MasterDb from "../../data/masters/CnLv12MasterDb.tsx";
import CnLv13MasterDb from "../../data/masters/CnLv13MasterDb.tsx";
import CnLv14MasterDb from "../../data/masters/CnLv14MasterDb.tsx";
import CnLv15MasterDb from "../../data/masters/CnLv15MasterDb.tsx";
import CnLv16MasterDb from "../../data/masters/CnLv16MasterDb.tsx";
import CnLv17MasterDb from "../../data/masters/CnLv17MasterDb.tsx";
import CnLv18MasterDb from "../../data/masters/CnLv18MasterDb.tsx";
import CnLv19MasterDb from "../../data/masters/CnLv19MasterDb.tsx";
import CnLv20MasterDb from "../../data/masters/CnLv20MasterDb.tsx";
import CnLv21MasterDb from "../../data/masters/CnLv21MasterDb.tsx";
import CnLv22MasterDb from "../../data/masters/CnLv22MasterDb.tsx";
import CnLv23MasterDb from "../../data/masters/CnLv23MasterDb.tsx";
import CnLv24MasterDb from "../../data/masters/CnLv24MasterDb.tsx";
import CnLv25MasterDb from "../../data/masters/CnLv25MasterDb.tsx";
import CnLv26MasterDb from "../../data/masters/CnLv26MasterDb.tsx";
import CnLv27MasterDb from "../../data/masters/CnLv27MasterDb.tsx";
import CnLv28MasterDb from "../../data/masters/CnLv28MasterDb.tsx";
import CnLv29MasterDb from "../../data/masters/CnLv29MasterDb.tsx";
import CnLv30MasterDb from "../../data/masters/CnLv30MasterDb.tsx";
import CnLv31MasterDb from "../../data/masters/CnLv31MasterDb.tsx";
import CnLv32MasterDb from "../../data/masters/CnLv32MasterDb.tsx";
import CnLv33MasterDb from "../../data/masters/CnLv33MasterDb.tsx";

import CnLv56MasterDb from "../../data/masters/CnLv56MasterDb.tsx";
import CnLv57MasterDb from "../../data/masters/CnLv57MasterDb.tsx";
import CnLv58MasterDb from "../../data/masters/CnLv58MasterDb.tsx";
import CnLv59MasterDb from "../../data/masters/CnLv58MasterDb.tsx";
import CnLv60MasterDb from "../../data/masters/CnLv60MasterDb.tsx";

export const InMasters = InMasterDb
export const ViMasters = ViMasterDb
export const JpMasters = JpMasterDb
export const KoMasters = KoMasterDb
export const CnMasters = [
  CnLv0MasterDb,
  CnLv1MasterDb,
  CnLv2MasterDb,
  CnLv3MasterDb,
  CnLv4MasterDb,
  CnLv5MasterDb,
  CnLv6MasterDb,
  CnLv7MasterDb,
  CnLv8MasterDb,
  CnLv9MasterDb,
  CnLv10MasterDb,
  CnLv11MasterDb,
  CnLv12MasterDb,
  CnLv13MasterDb,
  CnLv14MasterDb,
  CnLv15MasterDb,
  CnLv16MasterDb,
  CnLv17MasterDb,
  CnLv18MasterDb,
  CnLv19MasterDb,
  CnLv20MasterDb,
  CnLv21MasterDb,
  CnLv22MasterDb,
  CnLv23MasterDb,
  CnLv24MasterDb,
  CnLv25MasterDb,
  CnLv26MasterDb,
  CnLv27MasterDb,
  CnLv28MasterDb,
  CnLv29MasterDb,
  CnLv30MasterDb,
  CnLv31MasterDb,
  CnLv32MasterDb,
  CnLv33MasterDb,

  CnLv56MasterDb,
  CnLv57MasterDb,
  CnLv58MasterDb,
  CnLv59MasterDb,
  CnLv60MasterDb,
]

const AllMasters = [
  ...InMasters,
  ...CnMasters.flat(),
  ...JpMasters,
  ...ViMasters,
  ...KoMasters,
]

export default AllMasters
