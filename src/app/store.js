import { configureStore } from '@reduxjs/toolkit';
import viewReducer from './redux/slices/viewSlice';
import lunarReducer from './redux/slices/lunarSlice';
import exchangeRatesReducer from './redux/slices/exchangeRatesSlice';
import oilPricesReducer from './redux/slices/oilPricesSlice';

export const store = configureStore({
  reducer: {
    views: viewReducer, // 조회 조건
    lunar: lunarReducer, // 음력일
    exchangeRates: exchangeRatesReducer, // 환율
    oilPrices: oilPricesReducer, // 유가 정보
  },
});

export default store;