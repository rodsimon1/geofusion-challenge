import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const Map = ({ stores, minRevenue }) => {
  const startPosition = [-23.603, -46.661];
  return (
    <>
      <MapContainer style={{ height: '500px', width: '500px' }} center={startPosition} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {stores.map((store, index) => {
          const storeIcon =
            store.revenue < minRevenue
              ? L.icon({ iconUrl: require('../../images/marker-red.png') })
              : L.icon({ iconUrl: require('../../images/marker-blue.png') });

          return (
            <Marker icon={storeIcon} key={index} position={[store.latitude, store.longitude]}>
              <Popup>
                <h3>{store.name}</h3>
                <p>
                  <strong>Revenue: </strong>
                  {store.revenue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                </p>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
};

export default Map;
