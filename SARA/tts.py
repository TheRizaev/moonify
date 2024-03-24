import torch
import sounddevice as sd
import time
import numpy

language = 'ru'
model_id = 'v4_ru'
sample_rate = 48000
speaker = 'baya'
put_accent=True
put_yo=True
device = torch.device('cpu')


example_text = 'Привет, меня зовут Сара, и я голосовой помощник команды мун тим'

model, _ = torch.hub.load(repo_or_dir='snakers4/silero-models',
                                     model='silero_tts',
                                     language=language,
                                     speaker=model_id)
model.to(device)

audio = model.apply_tts(text=example_text,
                        speaker=speaker,
                        sample_rate=sample_rate,
                        put_accent=put_accent,
                        put_yo=put_yo)
print(example_text)

sd.play(audio, sample_rate)
time.sleep(len(audio) / sample_rate)
sd.stop()   