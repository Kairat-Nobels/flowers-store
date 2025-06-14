import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { promocodApi } from "../../api/api";
import { toast } from "react-toastify";

// Получить все промокоды
export const getPromocods = createAsyncThunk(
  "getPromocods",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(promocodApi);
      if (response.status === 200) {
        return await response.json();
      } else {
        throw Error(`Ошибка: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Создать промокод
export const createPromocod = createAsyncThunk(
  "createPromocod",
  async (promocod, { rejectWithValue }) => {
    try {
      const response = await fetch(promocodApi, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(promocod)
      });
      if (response.status === 201) {
        return await response.json();
      } else {
        throw Error(`Ошибка: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Обновить промокод
export const updatePromocod = createAsyncThunk(
  "updatePromocod",
  async ({ id, promocod }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${promocodApi}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(promocod)
      });
      if (response.status === 200) {
        return await response.json();
      } else {
        throw Error(`Ошибка: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Удалить промокод
export const deletePromocod = createAsyncThunk(
  "deletePromocod",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`${promocodApi}/${id}`, {
        method: "DELETE"
      });
      if (response.status === 200) {
        return id;
      } else {
        throw Error(`Ошибка: ${response.status}`);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const promocodSlice = createSlice({
  name: "promocodSlice",
  initialState: {
    promocods: [],
    loading: false,
    error: null,
    success: null,
    delLoading: false,
    delError: null,
    delMessage: null,
  },
  reducers: {
    clearPromocodMessages(state) {
      state.error = null;
      state.success = null;
      state.delError = null;
      state.delMessage = null;
    }
  },
  extraReducers: builder => {
    // Получение промокодов
    builder.addCase(getPromocods.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getPromocods.fulfilled, (state, action) => {
      state.loading = false;
      state.promocods = action.payload;
    });
    builder.addCase(getPromocods.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Создание промокода
    builder.addCase(createPromocod.pending, (state) => {
      state.loading = true;
      state.success = null;
      state.error = null;
    });
    builder.addCase(createPromocod.fulfilled, (state, action) => {
      state.loading = false;
      state.success = "Промокод успешно добавлен";
      state.promocods.unshift(action.payload);
      toast.success("Промокод успешно добавлен");
    });
    builder.addCase(createPromocod.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.error("Ошибка при добавлении промокода");
    });

    // Обновление промокода
    builder.addCase(updatePromocod.pending, (state) => {
      state.loading = true;
      state.success = null;
      state.error = null;
    });
    builder.addCase(updatePromocod.fulfilled, (state, action) => {
      state.loading = false;
      state.success = "Промокод успешно обновлён";
      state.promocods = state.promocods.map(item =>
        item.id === action.payload.id ? action.payload : item
      );
      toast.success("Промокод успешно обновлён");
    });
    builder.addCase(updatePromocod.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      toast.error("Ошибка при обновлении промокода");
    });

    // Удаление промокода
    builder.addCase(deletePromocod.pending, (state) => {
      state.delLoading = true;
      state.delError = null;
      state.delMessage = null;
    });
    builder.addCase(deletePromocod.fulfilled, (state, action) => {
      state.delLoading = false;
      state.delMessage = "Промокод успешно удалён";
      state.promocods = state.promocods.filter(item => item.id !== action.payload);
      toast.success("Промокод успешно удалён");
    });
    builder.addCase(deletePromocod.rejected, (state, action) => {
      state.delLoading = false;
      state.delError = action.payload;
      toast.error("Ошибка при удалении промокода");
    });
  }
});

export const { clearPromocodMessages } = promocodSlice.actions;

export default promocodSlice.reducer;